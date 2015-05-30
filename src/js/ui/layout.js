var React = require('react');
import FluxComponent from 'flummox/component';

var Menu = require('./menu');


module.exports = React.createClass({
  render: function() {    
    return (
      <div id="layout">
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
