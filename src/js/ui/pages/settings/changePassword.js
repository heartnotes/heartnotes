var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Button = require('../../components/button'),
  ChangePasswordProgressPopup = require('../../components/changePasswordProgressPopup'),
  PasswordInput = require('../../components/passwordInput'),
  NewPasswordInput = require('../../components/newPasswordInput');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      oldPassword: null,
      newPassword: null,
    }
  },

  render: function() { 
    var changePasswordButtonAttrs = {
      onClick: this._saveNewPassword,
      animActive: !!this.props.nowChangingPassword,
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
              requiredStrength={1} 
              tabIndex={2} />
          </div>
          <div className="action row">
            <ChangePasswordProgressPopup {...this.props}>
              <Button {...changePasswordButtonAttrs}>Save</Button>
            </ChangePasswordProgressPopup>
          </div>
        </form>
        
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
    
    this.props.flux.getActions('user').changePassword(
      this.state.oldPassword, this.state.newPassword
    );
  },

});
