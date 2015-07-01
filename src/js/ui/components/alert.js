
var React = require('react');


module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      msg: '',
    };
  },

  render: function() {
    return (
      <div className="alert">{this.props.msg}</div>
    );
  },

});




