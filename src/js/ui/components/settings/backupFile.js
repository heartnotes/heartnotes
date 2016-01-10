import _ from 'lodash';
import React from 'react';
import moment from 'moment';

import ProgressButton from '../progressButton';
import DateFormat from '../date';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let lastBackupTime = moment(diaryMgr.backupLastTime);

    lastBackupTime = (lastBackupTime.valueOf()) ? (
      <DateFormat date={diaryMgr.backupLastTime} format="MMMM DD, YYYY - HH:mm:ss" />
    ) : (
      <span>Never</span>
    ) 

    let btnAttrs = {
      defaultProgressMsg: 'Making backup...',
      progressProps: {
        centered: false
      },
      checkVar: diary.makingBackup,
      onClick: this._makeBackup,
    };

    return (
      <div className="backup-file">
        <h2>Backup</h2>
        <p className="last">
          <label>Last backup:</label>
          {lastBackupTime}
        </p>
        <ProgressButton {...btnAttrs}>Create backup</ProgressButton>
      </div>
    );
  },

  _makeBackup: function() {
    this.props.actions.makeBackup();
  },

});


module.exports = connectRedux([
  'makeBackup',
])(Component);

