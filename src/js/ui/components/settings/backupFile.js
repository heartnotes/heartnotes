import _ from 'lodash';
import React from 'react';

import Button from '../button';
import DateFormat from '../date';
import { connectRedux } from '../../helpers/decorators';
import EnableBackupsProgressPopup from './enableBackupsProgressPopup';


var Component = React.createClass({
  render: function() {
    let { diaryMgr } = this.props.data.diary;

    let backup = null,
      statusText = null;

    let backupFilePath = diaryMgr.backupFilePath;

    if (backupFilePath) {
      let lastBackupTime = (
        <DateFormat date={diaryMgr.backupLastTime} format="MMMM DD, YYYY - HH:mm:ss" />
      );

      statusText = 'ACTIVE';

      backup = (
        <div>
          <p className="file">
            <label>Location:</label>
            {backupFilePath}
          </p>
          <p className="last">
            <label>Last time:</label>
            {lastBackupTime}
          </p>
          <Button>Change location</Button>
          <Button onClick={this._disableBackups}>Disable</Button>
        </div>
      );
    } else {
      statusText = 'inactive';

      let btnAttrs = {
        onClick: this._enableBackups,
        animActive: !!_.get(this.props.data, 'diary.enablingBackups.inProgress'),
      };

      backup = (
        <EnableBackupsProgressPopup {...this.props}>
          <Button {...btnAttrs}>Set backup file</Button>
        </EnableBackupsProgressPopup>
      );
    }

    return (
      <div className="backupFile">
        <h2>Automated backups - {statusText}</h2>
        {backup}
      </div>
    );
  },

  _enableBackups: function() {
    this.props.actions.enableBackups();
  },

  _disableBackups: function() {
    this.props.actions.disableBackups();
  },

});


module.exports = connectRedux([
  'enableBackups',
  'disableBackups',
])(Component);

