import _ from 'lodash';
var React = require('react');

import { connectRedux } from './helpers/decorators';

var MainMenu = require('./components/mainMenu'),
  SubMenu = require('./components/subMenu'),
  WelcomeView = require('./pages/welcome/index'),
  UserAlert = require('./components/userAlert'),
  Logo = require('./components/logo');


var Component = React.createClass({
  render: function() {    
    var content = null;

    if (this.props.data.diary.name && this.props.data.diary.entries) {
      content = this._buildDefault();
    } else {
      content = this._buildWelcome();
    }

    return (
      <div id="layout">
        <UserAlert {...this.props.data.alert} />
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

});


module.exports = connectRedux(['init'])(Component);


