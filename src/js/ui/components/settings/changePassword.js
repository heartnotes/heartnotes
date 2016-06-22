var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var ProgressButton = require('../progressButton'),
  PasswordInput = require('../passwordInput'),
  NewPasswordInput = require('../newPasswordInput'),
  UserShouldRememberPasswordDialog = require('../userShouldRememberPasswordDialog');


import { connectRedux } from '../../helpers/decorators';



var Component = React.createClass({
  getInitialState: function() {
    return {
      oldPassword: null,
      newPassword: null,
    }
  },

  render: function() { 
    let { changingPassword } = this.props.data.diary;

    var changePasswordButtonAttrs = {
      defaultProgressMsg: 'Saving new password...',
      progressProps: {
        centered: false
      },
      checkVar: changingPassword,
      onClick: this._saveNewPassword,
    };

    if (!_.get(this.state.oldPassword, 'length') || !_.get(this.state.newPassword, 'length')) {
      changePasswordButtonAttrs.disabled = true;
    }

    return (
      <div className="change-password">
        <h2>Change password</h2>
        <form onSubmit={this._changePassword}>
          <div className="field row">
            <PasswordInput 
              password={this.state.oldPassword} 
              placeholder="Current password"
              onChange={this._setOldPassword}
              disabled={changingPassword.inProgress}
              tabIndex={1} />
          </div>
          <div className="input-fields row">
            <NewPasswordInput 
              ref="newPassword"
              passwordPlaceholder="New password"
              confirmPlaceholder="Confirm new password"
              onChange={this._setNewPassword} 
              requiredStrength={0} 
              disabled={changingPassword.inProgress}
              tabIndex={1} />
          </div>
          <div className="action row">
            <ProgressButton {...changePasswordButtonAttrs}>Save new password</ProgressButton>
          </div>
        </form>
        <UserShouldRememberPasswordDialog password={this.state.newPassword} ref="rememberDialog" />
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if (oldProps.nowChangingPassword && !this.props.nowChangingPassword && !this.props.changePasswordError) {
      this.setState({
        oldPassword: null,
        newPassword: null,
      });

      this.refs.newPassword.clear();
    }
  },


  _setOldPassword: function(password) {
    this.setState({
      oldPassword: password
    });
  },

  _setNewPassword: function(password) {
    this.setState({
      newPassword: password
    });
  },


  _saveNewPassword: function(e) {
    e.preventDefault();

    this.refs.rememberDialog.ask((shouldProceed) => {
      if (shouldProceed) {
        this.props.actions.changePassword(
          this.state.oldPassword, this.state.newPassword
        );
      }
    });
  },

});



module.exports = connectRedux([
  'changePassword'
])(Component);

