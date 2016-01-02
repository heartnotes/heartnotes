import _ from 'lodash';
import React from 'react';

import { connectRedux, routing } from './helpers/decorators';
import MainMenu from './components/mainMenu';
import BackgroundTasksMenu from './components/backgroundTasksMenu';
import SubMenu from './components/subMenu';
import WelcomeView from './pages/welcome/index';
import UserAlert from './components/userAlert';
import Logo from './components/logo';
import FooterBar from './components/footerBar';


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
        <FooterBar />
      </section>
    );
  },

  _buildDefault: function() {
    return (
      <div>
        <section id="sidebar">
          <Logo withText={false} onClick={this._onLogoClick} />
          <BackgroundTasksMenu {...this.props} />
          <MainMenu {...this.props} />
          <SubMenu {...this.props} />
        </section>
        <section id="content">
          {this.props.children}
        </section>
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


