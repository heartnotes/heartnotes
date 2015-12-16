import _ from 'lodash';
import React from 'react';

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
      name: null,
      password: null,
    }
  },

  render: function() { 
    var buttonAttrs = {
      onClick: this._savePassword,
      animActive: !!this.props.data.diary.creating.inProgress,
    };

    if (!_.get(this.state.password, 'length') || !_.get(this.state.name, 'length')) {
      buttonAttrs.disabled = true;
    }

    return (
      <div className="new-diary step">
        <p className="info1">Please remember your password!</p>
        <form onSubmit={this._createNew}>
          <div className="input-fields row">
            <input type="text"
              ref="name"
              onInput={this._setName} 
              value={this.state.name} 
              placeholder="Diary name"
              tabIndex={1} />
            <NewPasswordInput 
              onChange={this._setPassword} 
              requiredStrength={0}
              tabIndex={2} />
          </div>
          <div className="action row">
            <CreateDiaryProgressPopup {...this.props}>
              <Button {...buttonAttrs}>Next</Button>
            </CreateDiaryProgressPopup>
          </div>
        </form>
        <UserShouldRememberPasswordDialog ref="rememberDialog" />
        <Button size="xs" onClick={this._goBack}>Back</Button>
      </div>
    );
  },


  componentDidUpdate: function() {
    if (!this.props.isActive) {
      return;
    }
    
    if (this.props.data.diary.diaryMgr) {
      this.props.showStep('loadDiary');
    }
  },

  _setPassword: function(password) {
    this.setState({
      password: password
    });
  },

  _setName: function(name) {
    this.setState({
      name: name
    });
  },


  _createNew: function(e) {
    e.preventDefault();
    
    this.refs.rememberDialog.ask((shouldProceed) => {
      if (shouldProceed) {
        this.props.actions.createDiary(this.state.name, this.state.password);
      }
    });
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['createDiary'])(Component);



