var React = require('react');


module.exports = React.createClass({
  propTypes: {
    withText : React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      withText: true
    };
  },

  render: function() {
    var str1 = 'heart',
      str2 = 'note';

    if (this.props.withText) {
      return (
        <div className="logo">
          <span>{str1}</span>
          <span className="img" />
          <span>{str2}</span>
        </div>
      );
    } else {
      return logoImg;
    }
  },

});


