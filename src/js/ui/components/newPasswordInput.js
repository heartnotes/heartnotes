var React = require('react');


var PasswordInput = require('./passwordInput');


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
    return (
      <div className="new-password">
        <div className="password field row">
          <PasswordInput 
            placeholder="Enter password"
            password={this.password} 
            onChange={this._onChange}
            showToggleButton={true} />
          <span className={'strength level-'+ this.state.strength} />
        </div>
        <div className="confirm-password field row">
          <PasswordInput 
            placeholder="Confirm password"
            password={this.passwordConfirm} 
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


