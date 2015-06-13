var React = require('react');
import FluxComponent from 'flummox/component';

var Menu = require('./menu'),
  WelcomeView = require('./pages/welcome/index');


module.exports = React.createClass({
  render: function() {    
    var content = null;

    if (this.props.hasDataFile) {
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
        <WelcomeView {...this.props} />
      </section>
    );
  },

  _buildDefault: function() {
    return (
      <div>
        <section id="menu">
          <Menu {...this.props} />
        </section>
        <section id="content">
          <FluxComponent>
            {this.props.children}
          </FluxComponent>
        </section>
      </div>
    );
  },
});
