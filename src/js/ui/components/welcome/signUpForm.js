import $ from 'jquery';
import _ from 'lodash';
import React from 'react';

import Button from '../button';
import ExternalLink from '../externalLink';
import ProgressButton from '../progressButton';
import EmailInput from '../emailInput';
import NewPasswordInput from '../newPasswordInput';
import UserShouldRememberPasswordDialog from '../userShouldRememberPasswordDialog';
import { connectRedux, routing } from '../../helpers/decorators';
import * as Detect from '../../../utils/detect';


const TERMS_URL = Detect.serverHost() + '/terms-and-conditions';



var Component = React.createClass({
  propTypes: {
    onCreate: React.PropTypes.func.isRequired,
    progressCheckVar: React.PropTypes.object.isRequired,
    createButtonText: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      createButtonText: 'Sign up',
    };
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
      defaultProgressMsg: 'Signing up...',
      checkVar: this.props.progressCheckVar,
      onClick: this._createNew,
    };

    if (  !this.state.terms || 
          !_.get(this.state.password, 'length') || 
          !_.get(this.state.id, 'length')
        ) {
      buttonAttrs.disabled = true;
    }

    return (
      <div className="sign-up-form">
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
          <div className="row terms">
            <input type="checkbox" onChange={this._toggleTerms} />
            <span>
              I agree to the <ExternalLink href={TERMS_URL}>terms and conditions</ExternalLink>.
            </span>
          </div>
          <div className="action row">
            <ProgressButton {...buttonAttrs}>{this.props.createButtonText}</ProgressButton>
          </div>
        </form>
        <UserShouldRememberPasswordDialog ref="rememberDialog" />
      </div>
    );
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
        this.props.onCreate(
          this.state.id, 
          this.state.password
        )
          .then(() => {
            this.setState(this.getInitialState());
          });
      }
    });
  },

});



module.exports = connectRedux([
  'createDiary'
])(Component);



