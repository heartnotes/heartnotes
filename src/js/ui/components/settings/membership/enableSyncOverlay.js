var _ = require('lodash'),
  Q = require('bluebird'),
  React = require('react');

import Overlay from '../../overlay';
import ProgressButton from '../../progressButton';
import Button from '../../button';
import Loading from '../../loading';
import ErrorMessage from '../../errorMessage';
import SignUpForm from '../../welcome/signUpForm';
import { connectRedux } from '../../../helpers/decorators'; 


var Component = React.createClass({

  getInitialState: function() {
    return {
      allowCancel: true,
    };
  },

  render: function() {
    let cancelButton = this.state.allowCancel ? (
      <Button size="xs" onClick={this._hide}>Cancel</Button>
    ) : null;
    
    return (
      <Overlay ref="overlay" showCancelButton={false}>
        <div className="enable-cloud-sync">
          <p className="intro">
            Enter your email address and choose a password to enable cloud sync.
          </p>
          <SignUpForm
            progressCheckVar={this.props.data.diary.enablingCloudSync}  
            onCreate={this._enableSync} />
          {cancelButton}
        </div>
      </Overlay>
    );
  },

  show: function() {
    this.refs.overlay.show();
  },

  _hide: function() {
    this.refs.overlay.hide();
  },

  _enableSync: function(id, password) {
    this.setState({
      allowCancel: false,
    });

    return this.props.actions.enableCloudSync(
      id, 
      password
    )
      .finally(() => {
        if (this.isMounted()) {
          this.setState({
            allowCancel: true
          });
        }
      });
  },

});


module.exports = connectRedux([
  'enableCloudSync'
])(Component);


