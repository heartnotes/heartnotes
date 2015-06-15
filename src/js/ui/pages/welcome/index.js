var React = require('react'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import FluxComponent from 'flummox/component';

var NewUserSteps = [
  require('./createPasswordStep'),
  require('./createDataFile'),
];


module.exports = React.createClass({
  getInitialState: function() {
    return {
      step: 1,
    }
  },

  render: function() { 
    return (
      <div className="welcomeView">
        <div className="logo" />
        <h1>Heartnote</h1>
        <div className="step-container">
          <ReactCSSTransitionGroup transitionName="steps">
            {this._buildCurrentStep()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  },


  _buildCurrentStep () {
    var Step = NewUserSteps[this.state.step - 1];

    return (
      <div key={"stepkey" + this.state.step}>
        <FluxComponent connectToStores={['user']}>
          <Step nextStep={this._nextStep} prevStep={this._prevStep} />
        </FluxComponent>
      </div>
    );
  },


  _nextStep: function() {
    this.setState({
      step: this.state.step + 1
    });
  },


  _prevStep: function() {
    this.setState({
      step: this.state.step - 1
    });
  },
});

