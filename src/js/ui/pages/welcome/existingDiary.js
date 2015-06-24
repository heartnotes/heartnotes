var React = require('react');

var PasswordInput = require('../../components/passwordInput'),
  DerivationProgress = require('../../components/derivationProgress');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      showStep: null,
    };
  },

  getInitialState: function() {
    return {
      password: null,
    }
  },

  render: function() { 
    var buttonAttrs = {};
    if (!this.state.password || !this.state.password.length) {
      buttonAttrs.disabled = true;
    }

    return (
      <div className="existing-diary step">
        <p className="info">Please enter your password:</p>
        <div className="fields">
          <PasswordInput setPassword={this._setPassword} />
          <button onClick={this._checkPassword} {...buttonAttrs}>Next</button>
        </div>
        <DerivationProgress {...this.props} />
      </div>
    );
  },


  componentDidUpdate: function() {
    if (this.props.derivedKeys) {
      this.props.showStep('loadDiary');
    }
  },


  _setPassword: function(p) {
    this.setState({
      password: p
    });
  },

  _checkPassword: function() {
    this.props.flux.getActions('user')
      .openDataFile(this.props.lastDataFile.name, this.state.password);
  }
});

