import React from 'react';

import Icon from '../../components/icon';
import Button from '../../components/button';
import Loading from '../../components/loading';

import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  render: function() { 
    let activity = this.props.data.diary.loadingEntries;

    let progressMsg = (
      <Loading text="Loading diary" />
    );
    
    let progressMsg2 = activity.progressMsg;

    let loadingError = null;
    if (activity.error) {
      progressMsg = 'Loading diary failed!';

      let msg = (
        <span>{activity.error.toString()}</span>
      );

      loadingError = (
        <div>
          <div className="error">
            <Icon name="exclamation-triangle" />
            {msg}
          </div>
          <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
        </div>
      );
    }

    return (
      <div className="load-diary step">
        <p>{progressMsg}</p>
        <p className="progress-message">{progressMsg2}</p>
        {loadingError}
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if (!this.props.isActive) {
      return;
    }

    // if just became active then kick-off entry loading
    if (!oldProps.isActive) {
      // wait for 'show step' animation to end
      setTimeout(() => {
        this.props.actions.loadEntries();
      }, 1000);
    }
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['loadEntries'])(Component);

