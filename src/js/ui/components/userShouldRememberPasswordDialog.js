import _ from 'lodash';
import React from 'react';

import Overlay from './overlay';
import ProgressButton from './progressButton';
import PasswordInput from './passwordInput';



module.exports = React.createClass({
  propTypes: {
    password : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      password: '',
    };
  },

  getInitialState: function() {
    return {
      error: null,
      password: '',
    };
  },

  render: function() {
    let buttonAttrs = {
      defaultProgressMsg: 'Checking...',
      checkVar: {
        error: this.state.error
      },
      onClick: this._onSubmit,
      disabled: !_.get(this.state.password, 'length'),
    };

    return (
      <Overlay ref="overlay" showCancelButton={true} onCancel={this._onCancel}>
        <div className="confirm-password-dialog">
          <p className="intro">If you forget your password you will NOT be able to recover your diary entries.</p>
          <p>Please re-confirm your password:</p>
          <form onSubmit={this._openDiary}>
            <div className="field row">
              <PasswordInput 
                placeholder="Password"
                password={this.state.password} 
                onChange={this._setPassword} 
                tabIndex={1} />
            </div>
            <ProgressButton {...buttonAttrs}>Confirm</ProgressButton>
          </form>
        </div>
      </Overlay>
    );
  },


  _setPassword: function(p) {
    this.setState({
      password: p,
      error: null,
    });
  },


  _onSubmit: function() {
    if (this.state.password !== this.props.password) {
      this.setState({
        error: 'You entered it incorrectly!',
      });

      return;
    }

    this.refs.overlay.hide();

    let cb = this.callback;
    delete this.callback;

    cb(true);
  },


  _onCancel: function() {
    this.refs.overlay.hide();

    let cb = this.callback;
    delete this.callback;

    cb(false);
  },


  ask: function(callback) {
    this.setState({
      password: '',
    });

    this.refs.overlay.show();

    this.callback = callback;
  },

});



          




          
