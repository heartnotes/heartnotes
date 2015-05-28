var React = require('react');

var moment = require('moment');


module.exports = React.createClass({
  propTypes: {
    onUpdate : React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      onUpdate : null,
    };
  },

  render: function() {
    return (
      <div>test</div>
    );
  },

});


