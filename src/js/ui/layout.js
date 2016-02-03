import _ from 'lodash';
import React from 'react';

import { connectRedux, routing } from './helpers/decorators';
import MenuBar from './components/menuBar/index';
import Logo from './components/logo';
import Loading from './components/loading';
import UserAlert from './components/userAlert';
import WelcomeFooterBar from './components/welcome/footerBar';
import ErrorMessageFooterBar from './components/errorMessageFooter';


var Component = React.createClass({
  render: function() {    
    var content = null;

    if (this._diaryOpened()) {
      content = this._buildDefaultView();
    } else {
      content = this._buildWelcomeView();
    }

    return (
      <div id="layout">
        <UserAlert {...this.props.data.alert} />
        <div id="content-wrapper">
          {content}
        </div>
      </div>
    );    
  },

  componentDidMount: function() {
    this.props.actions.init();

    this._showWelcomeScreen();
  },

  componentDidUpdate: function() {
    this._showWelcomeScreen();
  },

  _showWelcomeScreen: function() {
    if (!this._diaryOpened() && !this._viewingWelcomeScreen()) {
      this.props.history.navigate('/welcome');
    }
  },

  _diaryOpened: function() {
    return !!_.get(this.props.data, 'diary.loadingEntries.success');
  },


  _viewingWelcomeScreen: function() {
    return 0 <= _.get(this.props.data, 'router.location.pathname').indexOf('/welcome');
  },


  _buildWelcomeView: function() {
    let content = (!this._viewingWelcomeScreen())
      ? (
          <div id="splash">
            <Logo />
            <Loading />
          </div>
        )
      : (this.props.children);

    return (
      <div id="welcome-content">
        {content}
        <WelcomeFooterBar />
      </div>
    );
  },

  _buildDefaultView: function() {
    return (
      <div>
        <MenuBar {...this.props}/>
        <div id="content">
          {this.props.children}
        </div>
        <ErrorMessageFooterBar />
      </div>
    );
  },


});


module.exports = connectRedux([
  'init'
])(routing()(Component));


