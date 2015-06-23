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
        onInput={this._onChange} 
        value={this.password} />
    );

    return (
      <div className="existing-password">
        <div className="password field">
          {inputElem}
          <a href="#" className="toggle" onClick={this._toggleTyping}>Show typing</a>
        </div>
      </div>
    )
  },


  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.password !== prevState.password) {
      this.props.setPassword(this.state.password);
    }
  },


  _onChange: function(e) {
    var password = $(e.currentTarget).val();

    this.setState({
      password: password,
    });
  },  


  _toggleTyping: function(e) {
    e.preventDefault();

    this.setState({
      showTyping: !this.state.showTyping
    });
  }

});


