var React = require('react');



module.exports = React.createClass({
  propTypes: {
    setPassword : React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      setPassword : null,
    };
  },

  getInitialState: function() {
    return {
      password: null,
      showTyping: false,
    };
  },

  render: function() {
    var inputType = this.state.showTyping ? 'text' : 'password';

    var inputElem = (
      <input type={inputType}
        onKeyUp={this._onChange} 
        onChange={this._onChange} 
        value={this.password} />
    );

    return (
      <div className="existing-password">
        <div className="password field">
          {inputElem}
          <a className="toggle" onClick={this._toggleTyping}>Show typing</a>
        </div>
      </div>
    )
  },

  _onChange: function(e) {
    var password = $(e.currentTarget).val();

    this.setState({
      password: password,
    });

    this._notifyParent();
  },  


  _notifyParent: function() {
    if (this.props.setPassword) {
      this.props.setPassword(this.state.password);
    }
  }

});


