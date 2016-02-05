import _ from 'lodash';
import React from 'react';

import { connectRedux, routing } from './helpers/decorators';
import MenuBar from './components/menuBar/index';
import Logo from './components/logo';
import Loading from './components/loading';
import UserAlert from './components/userAlert';
import WelcomeFooterBar from './components/welcome/footerBar';
import ErrorMessageFooterBar from './components/errorMessageFooter';
import WelcomeSplashPage from './pages/welcome/splash';


var Component = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },

  render: function() {    
    var content = null;

    if (this._viewingWelcomeScreen() || !this._isDiaryOpen()) {
      content = this._buildWelcomeView();
    } else {
      content = this._buildDefaultView();
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
    this._checkIfLoggedIn();
  },


  componentDidUpdate: function () {
    this._checkIfLoggedIn();
  },


  _checkIfLoggedIn: function() {
    if (!this._isDiaryOpen() && !this._viewingWelcomeScreen()) {
      this.props.router.push('/welcome');
    }
  },


  _isDiaryOpen: function() {
    return !!_.get(this.props, 'data.diary.loadingEntries.success');
  },


  _viewingWelcomeScreen: function() {
    return 0 <= _.get(this.props, 'location.pathname', '').indexOf('/welcome');
  },


  _buildWelcomeView: function() {
    let content = 
      this._viewingWelcomeScreen() 
        ? this.props.children 
        : <WelcomeSplashPage />

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


