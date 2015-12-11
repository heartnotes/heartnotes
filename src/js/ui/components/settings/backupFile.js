var _ = require('lodash'),
  React = require('react');

var Button = require('../button');

import DateFormat from '../date';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let { diaryMgr } = this.props.data.diary;

    let backup = null;

    let backupFilePath = diaryMgr.backupFilePath;

    if (backupFilePath) {
      let lastBackupTime = (
        <DateFormat date={diaryMgr.lastBackupTime} format="MMMM DD, YYYY - HH:mm:ss" />
      );

      backup = (
        <div>
          <p className="file">{backupFilePath}</p>
          <p className="last">Last backup: {lastBackupTime}</p>
        </div>
      );
    } else {
      backup = (
        <Button>Set backup file</Button>
      );
    }

    return (
      <div className="backupFile">
        <h2>Automated file backups</h2>
        {backup}
      </div>
    );
  },
});


module.exports = connectRedux()(Component);

