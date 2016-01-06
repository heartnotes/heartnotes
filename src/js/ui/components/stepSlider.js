var _ = require('lodash');
var React = require('react');


module.exports = React.createClass({
  propTypes: {
    defaultStep: React.PropTypes.string.isRequired,
    steps: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    return {
      stepOrder: _.pluck(this.props.steps, 'id'),

      steps: _.reduce(this.props.steps, (obj, val) => {
        obj[val.id] = val.Component;
        return obj;
      }, {}),

      currentStep: this.props.defaultStep,
    };
  },

  render: function() { 
    return (
      <div className="step-container">
        {this._buildSteps()}
      </div>
    );
  },



  _buildSteps () {
    let { steps, stepOrder, currentStep } = this.state;

    let activeStepDone = false;

    return _.map(stepOrder, function(stepId) {
      let Step = steps[stepId];

      let isActive = (currentStep === stepId);
      activeStepDone = activeStepDone || isActive;

      let hiddenDirection = (activeStepDone ? 'right' : 'left');

      let attrs = {
        className: 'step-holder ' + (isActive ? 'active' : `hidden ${hiddenDirection}`),
        key: `step-${stepId}`,
      };

      let stepProps = _.omit(this.props, 'defaultStep', 'steps');

      let stepElem = (
        <Step showStep={this._showStep} isActive={isActive} {...stepProps}/>
      );

      return (
        <div {...attrs}>{stepElem}</div>
      );
    }, this);
  },


  _showStep: function(name) {
    this.setState({
      currentStep: name
    });
  },
});









