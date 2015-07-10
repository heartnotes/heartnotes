var _ = require('lodash');

var React = require('react');

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
      step: 'start',
    }
  },

  render: function() { 
    return (
      <div className="welcomeView">
        <Logo />
        <div className="step-container">
          {this._buildSteps()}
        </div>
      </div>
    );
  },


  _buildSteps () {
    var activeStepDone = false;

    return _.map(['start', 'newDiary', 'loadDiary'], function(stepId) {
      var Step = steps[stepId];

      var isActive = (this.state.step === stepId);
      activeStepDone = activeStepDone || isActive;

      var hiddenDirection = (activeStepDone ? 'right' : 'left');

      var attrs = {
        className: 'step-holder ' + (isActive ? 'active' : `hidden ${hiddenDirection}`),
        key: `step-${stepId}`,
      };

      var stepElem = (
        <FluxComponent connectToStores={{
          user: store => ({
            lastDataFile: store.lastDataFile(),
            derivedKeys: store.state.derivedKeys,
            nowDerivingKeys: store.state.nowDerivingKeys,
            derivingKeysError: store.state.derivingKeysError,
            loadEntriesError: store.state.loadEntriesError,
          })
        }}>
          <Step showStep={this._showStep} isActive={isActive}/>
        </FluxComponent>
      );

      return (
        <div {...attrs}>{stepElem}</div>
      );
    }, this);
  },


  _showStep: function(name) {
    this.setState({
      step: name
    });
  },
});

