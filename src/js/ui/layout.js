import _ from 'lodash';
import React from 'react';

import { connectRedux, routing } from './helpers/decorators';
import MenuBar from './components/menuBar/index';
import WelcomeView from './pages/welcome/index';
import UserAlert from './components/userAlert';
import WelcomeFooterBar from './components/welcome/footerBar';
import ErrorMessageFooterBar from './components/errorMessageFooter';


var Component = React.createClass({
  render: function() {    
    var content = null;

    if (_.get(this.props.data, 'diary.loadingEntries.success')) {
      content = this._buildDefault();
    } else {
      content = this._buildWelcome();
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
  },

  _buildWelcome: function() {
    return (
      <section id="welcome-content">
        <WelcomeView {...this.props} />
        <WelcomeFooterBar />
      </section>
    );
  },

  _buildDefault: function() {
    return (
      <div>
        <MenuBar />
        <section id="content">
          {this.props.children}
        </section>
        <ErrorMessageFooterBar />
      </div>
    );
  },

  _onLogoClick: function() {
    this.props.history.navigate('/entries');
  }

});


module.exports = connectRedux([
  'init'
])(routing()(Component));


