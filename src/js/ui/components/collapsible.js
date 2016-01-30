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
      normalWidth: null,
      normalHeight: null,
      expand: false,
    };
  },

  render: function() {
    var attrs = {
      className: 'collapsible',
      style: {},
    };

    if (this.props.normalWidth) {
      attrs.style.width = this.props.normalWidth;
    }

    if (this.props.normalHeight) {
      attrs.style.height = this.props.normalHeight;
    }

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


