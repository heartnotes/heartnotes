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
    return (
      <div className="step one">
        step one
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },
});

