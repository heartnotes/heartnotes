var _ = require('lodash');
var React = require('react');

var Logo = require('../../components/logo'),
  Loading = require('../../components/loading');

import { connectRedux } from '../../helpers/decorators';


var steps = {
  start: require('./start'),
  newDiary: require('./newDiary'),
  loadDiary: require('./loadDiary'),
};


var Comonent = React.createClass({
  getInitialState: function() {
    return {
      step: 'start',
    }
  },

  render: function() { 
    let newVersionMsg = null;

    if (this.props.data.app.newVersionAvailable) {
      newVersionMsg = (
        <a href="#" onClick={this._goToHomepage}>New version available!</a>
      );
    } else if (this.props.data.app.checkingForUpdate.inProgress) {
      newVersionMsg = (
        <Loading />
      );
    }

    return (
      <div className="welcomeView">
        <Logo/>
        <div className="step-container">
          {this._buildSteps()}
        </div>
        <footer>
          <span className="new-version">{newVersionMsg}</span>
          <span className="version">v{this.props.data.app.version}</span>
          <span className="homepage-link">
            <a href="#" onClick={this._goToHomepage}>About</a>
          </span>
        </footer>
      </div>
    );
  },


  _goToHomepage: function() {
    require("shell").openExternal("http://heartnot.es");
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
        <Step showStep={this._showStep} isActive={isActive}/>
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



module.exports = connectRedux()(Comonent);



