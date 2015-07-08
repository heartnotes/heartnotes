var React = require('react');


module.exports = React.createClass({
  propTypes: {
    onClick : React.PropTypes.func,
    withText : React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      onClick: null,
      withText: true
    };
  },

  render: function() {
    var str1 = 'heart',
      str2 = 'notes';

    var attrs = {
      className: 'logo',
      onClick: this.props.onClick,
    };

    if (this.props.withText) {
      return (
        <div {...attrs}>
          <span>{str1}</span>
          <span className="img" />
          <span>{str2}</span>
        </div>
      );
    } else {
      return (
        <div {...attrs}>
          <span className="img" />
        </div>
      );
    }
  },

});


