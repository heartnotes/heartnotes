import _ from 'lodash';
import React from 'react';

import ProgressButton from '../progressButton';
import { connectRedux } from '../../helpers/decorators';




var Component = React.createClass({
  render: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let btnAttrs = {
      defaultProgressMsg: 'Restoring backup...',
      progressProps: {
        centered: false
      },
      checkVar: diary.restoringBackup,
      onClick: this._restoreBackup,
    };

    return (
      <div className="restore-file">
        <h2>Restore</h2>
        <ProgressButton {...btnAttrs}>Restore from backup</ProgressButton>
      </div>
    );
  },


  _restoreBackup: function() {
    this.props.actions.restoreBackup();
  },

});


module.exports = connectRedux([
  'restoreBackup',
])(Component);

