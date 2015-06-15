var React = require('react');

var NewPasswordInput = require('../../components/newPasswordInput');


module.exports = React.createClass({
  propTypes: {
    nextStep: React.PropTypes.func,
    prevStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      nextStep: null,
      prevStep: null,
    };
  },

  getInitialState: function() {
    return {
      password: '',
    }
  },

  render: function() { 
    return (
      <div className="create-password step">
        <p className="info">Please enter a password to encrypt your data file 
        with. Note:</p>
        <ul>
          <li>Use A to Z, numbers and symbols altogether to ensure a strong password.</li>
          <li>Do not forget it! if you forget your password you will NOT be able to open your diary.</li>
        </ul>        
        <div className="fields">
          <NewPasswordInput setPassword={this._setPassword} requiredStrength={1} />
        </div>
        <button 
            onClick={this._savePassword} 
            disabled={!this.state.password.length}>Next</button>
      </div>
    );
  },

  _setPassword: function(passwd) {
    this.setState({
      password: passwd
    });
  },

  _savePassword: function() {
    this.props.flux.getActions('user').setNewPassword(this.state.password);

    this.props.nextStep();
  }
});

