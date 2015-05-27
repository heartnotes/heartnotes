var React = require('react');

var Menu = require('./menu');


module.exports = React.createClass({
  render: function() { 
    return (
      <div id="layout">
        <section id="menu">
          <Menu {...this.props} />
        </section>
        <section id="content">
          {this.props.children}
        </section>
      </div>
    );
  },
});
