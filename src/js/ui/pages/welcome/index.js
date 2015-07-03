var React = require('react'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import FluxComponent from 'flummox/component';


var Logo = require('../../components/logo');



var steps = {
  start: require('./start'),
  newDiary: require('./newDiary'),
  loadDiary: require('./loadDiary'),
};


module.exports = React.createClass({
  getInitialState: function() {
    return {
      step: 'newDiary',
    }
  },

  render: function() { 
    return (
      <div className="welcomeView">
        <Logo />
        <div className="step-container">
          <ReactCSSTransitionGroup transitionName="steps">
            {this._buildCurrentStep()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  },


  _buildCurrentStep () {
    var Step = steps[this.state.step];

    return (
      <div className="step-anim-holder" key={"stepkey" + this.state.step}>
        <FluxComponent connectToStores={{
          user: store => ({
            lastDataFile: store.lastDataFile(),
            derivedKeys: store.state.derivedKeys,
            nowDerivingKeys: store.state.nowDerivingKeys,
            derivingKeysError: store.state.derivingKeysError,
            loadEntriesError: store.state.loadEntriesError,
          }),
        }}>
          <Step showStep={this._showStep} />
        </FluxComponent>
      </div>
    );
  },


  _showStep: function(name) {
    this.setState({
      step: name
    });
  },
});

