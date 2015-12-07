import _ from 'lodash';
import React from 'react';
import { Navigation } from 'react-router';

import { connectRedux } from './helpers/decorators';
import MainMenu from './components/mainMenu';
import SubMenu from './components/subMenu';
import WelcomeView from './pages/welcome/index';
import UserAlert from './components/userAlert';
import Logo from './components/logo';


var Component = React.createClass({
  mixins: [Navigation],
  
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
          <Logo withText={false} onClick={this._onLogoClick} />
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
    this.transitionTo('entries');
  }

});


module.exports = connectRedux(['init'])(Component);


