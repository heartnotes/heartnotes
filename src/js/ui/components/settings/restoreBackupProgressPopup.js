import _ from 'lodash';
import React from 'react';
import ActionProgress from '../actionProgress';


module.exports = React.createClass({

  render: function() {
    var msg = null;

    let { diary } = this.props.data;

    if (_.get(diary, 'restoringBackup.inProgress')) {
      msg = (
        <div>Restoring backup.....</div>
      );
    }

    if (_.get(diary, 'restoringBackup.error')) {
      msg = (
        <div className="error">{diary.restoringBackup.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={msg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




