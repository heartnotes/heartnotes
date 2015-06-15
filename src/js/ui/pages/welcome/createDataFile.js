var React = require('react');


module.exports = React.createClass({
  propTypes: {
    nextStep: React.PropTypes.func,
    prevStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      nextStep: null,
      prevStep: null,
    };
  },

  render: function() { 
    var content;

    if (this.props.derivingKeys) {
      content = <div>Deriving keys</div>
    } else {
      content = <div>Keys derived</div>
    }

    return (
      <div className="derive-key step">{content}</div>
    );
  },
});

