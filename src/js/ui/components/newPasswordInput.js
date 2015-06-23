var React = require('react');



module.exports = React.createClass({
  propTypes: {
    setPassword : React.PropTypes.func,
    requiredStrength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      setPassword : null,
      requiredStrength: 2,
    };
  },

  getInitialState: function() {
    return {
      password: null,
      passwordConfirm: null,
      strength: 0,
      showTyping: false,
    };
  },

  render: function() {
    var inputType = this.state.showTyping ? 'text' : 'password';

    var inputElem = (
      <input type={inputType}
        onInput={this._onChange} 
        value={this.password} />
    );

    var confirmElem = (
      <input type={inputType}
        onInput={this._onConfirmChange} 
        value={this.passwordConfirm} />
    );

    return (
      <div className="new-password">
        <div className="password field">
          {inputElem}
          <span className={'strength level-'+ this.state.strength} />
          <a href="#" className="toggle" onClick={this._toggleTyping}>Show typing</a>
        </div>
        <div className="confirm-password field">
          {confirmElem}
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
        this.props.setPassword(null);
      } else {
        this.props.setPassword(this.state.password);      
      }
    }
  },


  _toggleTyping: function(e) {
    e.preventDefault();

    this.setState({
      showTyping: !this.state.showTyping
    });
  },


  _onChange: function(e) {
    var password = $(e.currentTarget).val(),
      strength = this._calcStrength(password);

    this.setState({
      strength: strength,
      password: password,
    });
  },  


  _onConfirmChange: function(e) {
    var passwordConfirm = $(e.currentTarget).val();

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


