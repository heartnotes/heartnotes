var React = require('react'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


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
    return (
      <div key={"stepkey" + this.state.step}>
        <p>{"step" + this.state.step}</p>
        <button onClick={this._nextStep}>Next</button>
      </div>
    );
  },


  _nextStep: function() {
    this.setState({
      step: this.state.step + 1
    });
  }
});
