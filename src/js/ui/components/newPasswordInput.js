var React = require('react');


var PasswordInput = require('./passwordInput'),
  Collapsible = require('./collapsible'),
  Progress = require('./progress');


module.exports = React.createClass({
  propTypes: {
    onChange : React.PropTypes.func,
    requiredStrength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      onChange : null,
      requiredStrength: 2,
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
    var strengthMeterHeight = '1rem';
    
    if (1 > this.state.strength) {
      console.log('hidden');
      strengthMeterHeight = '0px';
    }

    return (
      <div className="new-password-input">
        <div className="password field row">
          <PasswordInput 
            placeholder="Enter password"
            password={this.state.password} 
            onChange={this._onChange}
            showToggleButton={true} />
          <Collapsible height={strengthMeterHeight}>
            {this._buildStrengthMeter()}
          </Collapsible>
        </div>
        <div className="confirm-password field row">
          <PasswordInput 
            placeholder="Confirm password"
            password={this.state.passwordConfirm} 
            onChange={this._onConfirmChange} />
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

    if (7 <= val) {
      val = 7;
      color = '#f00';
      text = 'Strong';
    }

    return (
      <div className="strength-meter">
        <Progress max={7} value={val} text={text} color={color} />
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

    var total = 1;

    total += (8 < password.length ? 1 : -1);
    total += (16 <= password.length ? 1 : 0);
    total += (password.match(/[A-Z]/) ? 1 : 0);
    total += (password.match(/[a-z]/) ? 1 : 0);
    total += (password.match(/[0-9]/) ? 1 : 0);
    total += (password.match(/[^A-Za-z0-9]/) ? 1 : 0);

    return total;
  },



});


