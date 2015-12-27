import _ from 'lodash';
import React from 'react';
import ActionProgress from '../actionProgress';


module.exports = React.createClass({

  render: function() {
    var msg = null;

    let { diary } = this.props.data;

    if (_.get(diary, 'makingBackup.inProgress')) {
      msg = (
        <div>Making backup.....</div>
      );
    }

    if (_.get(diary, 'makingBackup.error')) {
      msg = (
        <div className="error">{diary.makingBackup.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={msg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




