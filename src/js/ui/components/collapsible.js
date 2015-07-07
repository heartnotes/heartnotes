var React = require('react');

var moment = require('moment');


module.exports = React.createClass({
  propTypes: {
    normalWidth : React.PropTypes.string,
    normalHeight : React.PropTypes.string,
    expand : React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      normalWidth: '100%',
      normalHeight: '100%',
      expand: false,
    };
  },

  render: function() {
    var attrs = {
      className: 'collapsible',
      style: {
        width: this.props.normalWidth,
        height: this.props.normalHeight,
      }
    };

    if (!this.props.expand) {
      attrs.className += ' collapsed';
      attrs.style.height = '0px';
    }

    return (
      <div {...attrs}>
        {this.props.children}
      </div>
    );
  },

});


