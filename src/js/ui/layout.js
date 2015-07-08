var React = require('react');
import FluxComponent from 'flummox/component';

var Menu = require('./menu'),
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
          <Logo withText={false} onClick={this._closeDiary} />
          <Menu {...this.props} />
        </section>
        <section id="content">
          <FluxComponent connectToStores={['entries']}>
            {this.props.children}
          </FluxComponent>
        </section>
      </div>
    );
  },


  _closeDiary: function() {
    this.props.flux.getActions('user').closeDataFile();
  },
});
