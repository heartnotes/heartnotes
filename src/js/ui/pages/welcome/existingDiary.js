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
      password: '',
    }
  },

  render: function() { 
    return (
      <div className="existing-diary step">
        <p className="info">Please enter your password:</p>
        <div className="fields">
          <PasswordInput setPassword={this._setPassword} />
        </div>
        <button 
            onClick={this._checkPassword} 
            disabled={!this.state.password.length}>Next</button>
        <DerivationProgress {...this.props} />
      </div>
    );
  },


  componentDidUpdate: function() {
    if (this.props.derivedKeys) {
      this.props.showStep('openDiary');
    }
  },


  _setPassword: function(passwd) {
    this.setState({
      password: passwd
    });
  },

  _savePassword: function() {
    this.props.flux.getActions('user')
      .openDataFile(this.props.lastDataFile.filename, this.state.password);
  }
});

