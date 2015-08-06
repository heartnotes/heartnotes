var React = require('react');

var PasswordInput = require('./passwordInput'),
  Collapsible = require('./collapsible'),
  Progress = require('./progress'),
  Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    onChange : React.PropTypes.func,
    requiredStrength: React.PropTypes.number,
    passwordPlaceholder: React.PropTypes.string,
    confirmPlaceholder: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      onChange : null,
      requiredStrength: 2,
      passwordPlaceholder: 'Enter password',
      confirmPlaceholder: 'Confirm password',
    };
  },

  getInitialState: function() {
    return {
      password: null,
      passwordConfirm: null,
      strength: 0,
    };
  },


  render: function() {
    var showStrengthMeter = (this.state.password && !!this.state.password.length);

    return (
      <div className="new-password-input">
        <div className="password field row">
          <PasswordInput 
            placeholder={this.props.passwordPlaceholder}
            password={this.state.password} 
            onChange={this._onChange}
            showToggleButton={true} 
            tabIndex="1" />
          <Collapsible normalHeight="2rem" expand={showStrengthMeter}>
            {this._buildStrengthMeter()}
          </Collapsible>
        </div>
        <div className="confirm-password field row">
          <PasswordInput 
            placeholder={this.props.confirmPlaceholder}
            password={this.state.passwordConfirm} 
            onChange={this._onConfirmChange} 
            tabIndex="2" />
        </div>
      </div>
    )
  },


  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.password !== this.state.password 
        || prevState.passwordConfirm !== this.state.passwordConfirm) 
    {
      if (this.props.requiredStrength > this.state.strength) {
        return;
      }

      if (this.state.password !== this.state.passwordConfirm) {
        this.props.onChange(null);
      } else {
        this.props.onChange(this.state.password);      
      }
    }
  },



  _buildStrengthMeter: function() {
    var text = 'Weak',
      color = '#ff0',
      val = this.state.strength;

    if (4 <= val) {
      text = 'Medium';
      color = '#f70';
    }

    if (6 <= val) {
      val = 6;
      color = '#f00';
      text = 'Strong';
    }

    var strengthTooltip = (
      <div className="password-strength-hints">
        <p>Use uppercase and lowercase letters, numbers and symbols to ensure a strong password.</p>
      </div>
    );

    return (
      <div className="strength-meter">
        <label>
          Password strength
          <Icon name="info-circle" tooltip={strengthTooltip} />
        </label>
        <Progress max={6} value={val} text={text} color={color} />
      </div>
    );
  },


  _onChange: function(password) {
    var strength = this._calcStrength(password);

    this.setState({
      strength: strength,
      password: password,
    });
  },  


  _onConfirmChange: function(passwordConfirm) {
    this.setState({
      passwordConfirm: passwordConfirm
    });
  },  


  _calcStrength: function(password) {
    if (!password.length) {
      return 0;
    }

    var total = 0;

    total += (password.match(/[A-Z]/) ? 1 : 0);
    total += (password.match(/[a-z]/) ? 1 : 0);
    total += (password.match(/[0-9]/) ? 1 : 0);
    total += (password.match(/[^A-Za-z0-9]/) ? 1 : 0);
    total += (8 < password.length ? 1 : -1);
    total += (16 <= password.length ? 1 : 0);

    return total;
  },



});


