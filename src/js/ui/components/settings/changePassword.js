var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Button = require('../button'),
  ChangePasswordProgressPopup = require('../changePasswordProgressPopup'),
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
    var changePasswordButtonAttrs = {
      onClick: this._saveNewPassword,
      animActive: !!this.props.data.diary.changingPassword.inProgress,
    };

    if (!_.get(this.state.oldPassword, 'length') || !_.get(this.state.newPassword, 'length')) {
      changePasswordButtonAttrs.disabled = true;
    }

    return (
      <div className="changePassword">
        
        <h2>Change password</h2>
        <form onSubmit={this._changePassword}>
          <div className="field row">
            <PasswordInput 
              password={this.state.oldPassword} 
              placeholder="Current password"
              onChange={this._setOldPassword}
              tabIndex={1} />
          </div>
          <div className="input-fields row">
            <NewPasswordInput 
              ref="newPassword"
              passwordPlaceholder="New password"
              confirmPlaceholder="Confirm new password"
              onChange={this._setNewPassword} 
              requiredStrength={0} 
              tabIndex={2} />
          </div>
          <div className="action row">
            <ChangePasswordProgressPopup {...this.props}>
              <Button {...changePasswordButtonAttrs}>Save new password</Button>
            </ChangePasswordProgressPopup>
          </div>
        </form>
        <UserShouldRememberPasswordDialog ref="rememberDialog" />
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

