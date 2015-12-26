import _ from 'lodash';
import React from 'react';
import ActionProgress from '../actionProgress';


module.exports = React.createClass({

  render: function() {
    var msg = null;

    let { diary } = this.props.data;

    if (_.get(diary, 'enablingBackups.inProgress')) {
      msg = (
        <div>Enabling backups.....</div>
      );
    }

    if (_.get(diary, 'enablingBackups.error')) {
      msg = (
        <div className="error">{diary.enablingBackups.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={msg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




