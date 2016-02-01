import $ from 'jquery';
import _ from 'lodash';
import React from 'react';

var Button = require('../../components/button'),
  ExternalLink = require('../../components/externalLink'),
  ProgressButton = require('../../components/progressButton'),
  EmailInput = require('../../components/emailInput'),
  NewPasswordInput = require('../../components/newPasswordInput'),
  UserShouldRememberPasswordDialog = require('../../components/userShouldRememberPasswordDialog');

import { connectRedux } from '../../helpers/decorators';
import * as Detect from '../../../utils/detect';


const TERMS_URL = Detect.serverHost() + '/terms-and-conditions';



var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      id: null,
      password: null,
    }
  },

  render: function() { 
    let { creating } = this.props.data.diary;

    var buttonAttrs = {
      defaultProgressMsg: 'Creating diary...',
      checkVar: creating,
      onClick: this._createNew,
    };

    if (  !this.state.terms || 
          !_.get(this.state.password, 'length') || 
          !_.get(this.state.id, 'length')
        ) {
      buttonAttrs.disabled = true;
    }

    return (
      <div className="new-diary step">
        <form onSubmit={this._createNew}>
          <div className="input-fields row">
            <EmailInput 
              onChange={this._setId} 
              disabled={creating.inProgress}
              tabIndex={1} />
          </div>
          <div className="input-fields row">
            <NewPasswordInput 
              onChange={this._setPassword} 
              requiredStrength={0}
              centeredStrengthMeter={true}
              disabled={creating.inProgress}
              tabIndex={2} />
          </div>
          <div className="row">
            <input 
              type="checkbox"
              onChange={this._toggleTerms} />
                I agree to the <ExternalLink href={TERMS_URL}>terms and conditions</ExternalLink>.
          </div>
          <div className="action row">
            <ProgressButton {...buttonAttrs}>Create diary</ProgressButton>
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

  _setId: function(id) {
    this.setState({
      id: id,
    });
  },

  _toggleTerms: function(e) {
    let checked = $(e.currentTarget).is(':checked');

    this.setState({
      terms: !!checked,
    });
  },

  _createNew: function(e) {
    e.preventDefault();

    this.refs.rememberDialog.ask((shouldProceed) => {
      if (shouldProceed) {
        this.props.actions.createDiary(this.state.id, this.state.password)
          .then(() => {
            this.setState(this.getInitialState());
          });
      }
    });
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['createDiary'])(Component);



