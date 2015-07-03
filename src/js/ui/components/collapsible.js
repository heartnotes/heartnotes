var React = require('react');

var moment = require('moment');


module.exports = React.createClass({
  propTypes: {
    width : React.PropTypes.string,
    height : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      width: '100%',
      height: '100%',
    };
  },

  render: function() {
    var attrs = {
      style: {
        width: this.props.width,
        height: this.props.height,
      }
    };

    return (
      <div className="collapsible" {...attrs}>
        {this.props.children}
      </div>
    );
  },

});


