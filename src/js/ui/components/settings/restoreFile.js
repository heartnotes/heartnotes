import _ from 'lodash';
import React from 'react';

import Button from '../button';
import Overlay from '../overlay';
import { connectRedux } from '../../helpers/decorators';


var RestoreOverlay = React.createClass({
  getInitialState: function() {
    return {
      filePath: null,
    }
  },

  render: function() {
    return (
      <Overlay ref="overlay">
        <div className="restore-backup-dialog">
          <div className="buttons">
            <Button>Begin</Button>
            <Button onClick={this.hide}>Cancel</Button>
          </div>
        </div>
      </Overlay>
    );
  },

  show: function(filePath) {
    this.setState({
      filePath: filePath
    });

    this.refs.overlay.show();
  },

  hide: function() {
    this.refs.overlay.hide();
  },
});



var Component = React.createClass({
  render: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let btnAttrs = {
      onClick: this._selectBackupFile,
    };

    return (
      <div className="restore-file">
        <h2>Restore</h2>
        <RestoreOverlay ref="task" />
      </div>
    );
  },

  _selectBackupFile: function() {
    this.props.actions.selectBackupFile()
      .then((backupFile) => {
        this.refs.task.show(backupFile);
      });
  },

});


module.exports = connectRedux([
  'makeBackup',
])(Component);

