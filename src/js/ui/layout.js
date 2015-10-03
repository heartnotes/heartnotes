var React = require('react');

import { connectRedux } from './helpers/decorators';

var MainMenu = require('./components/mainMenu'),
  SubMenu = require('./components/subMenu'),
  WelcomeView = require('./pages/welcome/index'),
  UserAlert = require('./components/userAlert'),
  Logo = require('./components/logo');


module.exports = connectRedux(['init'])(React.createClass({
  render: function() {    
    var content = null;

    if (this.props.passwordEntered && this.props.entriesLoaded) {
      content = this._buildDefault();
    } else {
      content = this._buildWelcome();
    }

    return (
      <div id="layout">
        <UserAlert msg={this.props.userAlertMsg} type={this.props.userAlertType} />
        {content}
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
      </section>
    );
  },

  _buildDefault: function() {
    return (
      <div>
        <section id="sidebar">
          <Logo withText={false} />
          <MainMenu {...this.props} />
          <SubMenu {...this.props} />
        </section>
        <section id="content">
          {this.props.children}
        </section>
      </div>
    );
  },

}));
