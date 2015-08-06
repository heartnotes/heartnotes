var React = require('react');
import FluxComponent from 'flummox/component';

var MainMenu = require('./components/mainMenu'),
  SubMenu = require('./components/subMenu'),
  WelcomeView = require('./pages/welcome/index'),
  Logo = require('./components/logo');


module.exports = React.createClass({
  render: function() {    
    var content = null;

    if (this.props.passwordEntered && this.props.entriesLoaded) {
      content = this._buildDefault();
    } else {
      content = this._buildWelcome();
    }

    return (
      <div id="layout">
        {content}
      </div>
    );    
  },

  _buildWelcome: function() {
    return (
      <section id="welcome-content">
        <FluxComponent>
          <WelcomeView {...this.props} />
        </FluxComponent>
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
          <FluxComponent connectToStores={['user', 'entries']}>
            {this.props.children}
          </FluxComponent>
        </section>
      </div>
    );
  },


});
