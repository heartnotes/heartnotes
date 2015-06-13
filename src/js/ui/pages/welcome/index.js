var React = require('react'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Steps = [
  require('./step1'),
  require('./step2'),
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
        <ReactCSSTransitionGroup transitionName="steps">
          {this._buildCurrentStep()}
        </ReactCSSTransitionGroup>
      </div>
    );
  },


  _buildCurrentStep () {
    var Step = Steps[this.state.step - 1];

    return (
      <div key={"stepkey" + this.state.step}>
        <Step nextStep={this._nextStep} prevStep={this._prevStep} />
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

