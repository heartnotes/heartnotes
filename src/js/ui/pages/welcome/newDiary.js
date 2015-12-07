var React = require('react');

var Button = require('../../components/button'),
  NewPasswordInput = require('../../components/newPasswordInput'),
  CreateDiaryProgressPopup = require('../../components/createDiaryProgressPopup'),
  UserShouldRememberPasswordDialog = require('../../components/userShouldRememberPasswordDialog');

import { connectRedux } from '../../helpers/decorators';



var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      password: null,
    }
  },

  render: function() { 
    var buttonAttrs = {
      onClick: this._savePassword,
      animActive: !!this.props.data.diary.creating.inProgress,
    };

    if (!this.state.password || !this.state.password.length) {
      buttonAttrs.disabled = true;
    }

    return (
      <div className="new-diary step">
        <p className="info1">Please remember your password.</p>
        <p className="info2">Or else you will not be able to open your diary!</p>
        <form onSubmit={this._savePassword}>
          <div className="input-fields row">
            <NewPasswordInput 
              onChange={this._setPassword} 
              requiredStrength={0}
              tabIndex={1} />
          </div>
          <div className="action row">
            <CreateDiaryProgressPopup {...this.props}>
              <Button {...buttonAttrs}>Next</Button>
            </CreateDiaryProgressPopup>
          </div>
        </form>
        <UserShouldRememberPasswordDialog ref="rememberDialog" />
        <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
      </div>
    );
  },


  componentDidUpdate: function() {
    if (!this.props.isActive) {
      return;
    }
    
    if (this.props.data.diary.name) {
      this.props.showStep('loadDiary');
    }
  },

  _setPassword: function(passwd) {
    this.setState({
      password: passwd
    });
  },

  _savePassword: function() {
    this.refs.rememberDialog.ask((shouldProceed) => {
      if (shouldProceed) {
        this.props.actions.createDiary(this.state.password);
      }
    });
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['createDiary'])(Component);



