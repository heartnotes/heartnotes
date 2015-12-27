import _ from 'lodash';
import React from 'react';

import Button from '../button';
import DateFormat from '../date';
import { connectRedux } from '../../helpers/decorators';
import MakeBackupProgressPopup from './makeBackupProgressPopup';


var Component = React.createClass({
  render: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let lastBackupTime = (diaryMgr.backupLastTime) ? (
      <DateFormat date={diaryMgr.backupLastTime} format="MMMM DD, YYYY - HH:mm:ss" />
    ) : (
      <span>Never</span>
    ) 

    let btnAttrs = {
      onClick: this._makeBackup,
      animActive: !!_.get(diary, 'makingBackup.inProgress'),
    };

    return (
      <div className="backup-file">
        <h2>Backup</h2>
        <p className="last">
          <label>Last backup:</label>
          {lastBackupTime}
        </p>
        <MakeBackupProgressPopup {...this.props}>
          <Button {...btnAttrs}>Backup to file</Button>
        </MakeBackupProgressPopup>
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

