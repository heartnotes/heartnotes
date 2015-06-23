var React = require('react');

var faker = require('faker')

var NewPasswordInput = require('../../components/newPasswordInput'),
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
      <div className="new-diary step">
        <p className="info">Please enter a password to encrypt your diary 
        with. Note:</p>
        <ul>
          <li>Use A to Z, numbers and symbols altogether to ensure a strong password.</li>
          <li>Do not forget it! if you forget your password you will NOT be able to open your diary.</li>
        </ul>        
        <div className="fields">
          <NewPasswordInput setPassword={this._setPassword} requiredStrength={1} />
        </div>
        <button onClick={this._savePassword} {...buttonAttrs}>Next</button>
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
      .saveNewDataFile(faker.name.firstName(), this.state.password);
  },


});

