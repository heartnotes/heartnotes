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

  render: function() { 
    return (
      <div className="one">
        <p className="info">Please enter a password to encrypt your data file 
        with. Note:</p>
        <ul>
          <li>Use A to Z, numbers and symbols altogether to ensure a strong password.</li>
          <li>Do not forget it! if you forget your password you will NOT be able to open your diary.</li>
        </ul>        
        <div className="fields">
          <NewPasswordInput setPassword={this._setPassword} />
        </div>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  },

  _setPassword: function(passwd) {
    console.log(passwd);
  }
});

