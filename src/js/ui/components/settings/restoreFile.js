import _ from 'lodash';
import React from 'react';

import ProgressButton from '../progressButton';
import Button from '../button';
import Overlay from '../overlay';
import { connectRedux } from '../../helpers/decorators';
import Loading from '../../components/loading';
import PasswordInput from '../../components/passwordInput';


var RestoreOverlay = React.createClass({
  getInitialState: function() {
    return {
      filePath: null,
      password: null,
    }
  },

  render: function() {
    let buttonAttrs = {
      defaultProgressMsg: 'Restoring from old diary...',
      progressProps: {
        centered: false
      },
      checkVar: this.props.checkVar,
      onClick: this._restore,
      disabled: !_.get(this.state.password, 'length')
    };
    
    let message = "Restore from old diary";

    if (this.props.checkVar.progressMsg) {
      message = (
        <p className="progress-message">
          <Loading text={this.props.checkVar.progressMsg} />
        </p>
      );
    }

    let passwordInput = (
      <PasswordInput 
        placeholder="Password"
        password={this.state.password} 
        onChange={this._setPassword} 
        tabIndex={1} />
    );

    return (
      <Overlay ref="overlay" showCancelButton={true} onCancel={this.hide}>
        <div className="restore-backup-dialog">
          <h2>{message}</h2>
          <form onSubmit={this._createNew}>
            <div className="input-fields row">
              {passwordInput}
            </div>
            <div className="action row">
              <ProgressButton {...buttonAttrs}>Begin import</ProgressButton>
            </div>
          </form>
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


  _setPassword: function(password) {
    this.setState({
      password: password,
    });
  },

  _restore: function() {
    return this.props.restoreHandler(this.state.filePath, this.state.password)
      .then(() => {
        this.refs.overlay.hide();
      });
  }

});




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
        {this._buildRestoreFromOldButton()}
      </div>
    );
  },


  _buildRestoreFromOldButton: function() {
    let { diary } = this.props.data;
    let { diaryMgr } = diary;

    let btnAttrs = {
      onClick: this._selectOldDiary,
    };

    return (
      <div>
        <RestoreOverlay 
          ref="overlay" 
          checkVar={this.props.data.diary.restoringFromOldDiary} 
          restoreHandler={this._restoreFromOldDiary} />
        <Button {...btnAttrs}>Restore from v1.x diary</Button>
      </div>
    );
  },

  _restoreBackup: function() {
    this.props.actions.restoreBackup();
  },

  _selectOldDiary: function() {
    this.props.actions.selectOldDiaryFile()
      .then((filePath) => {
        if (filePath) {
          this.refs.overlay.show(filePath);
        }
      });
  },

  _restoreFromOldDiary: function(filePath, password) {
    return this.props.actions.restoreFromOldDiaryFile(filePath, password);
  }

});


module.exports = connectRedux([
  'restoreBackup',
  'restoreFromOldDiaryFile',
  'selectOldDiaryFile'
])(Component);

