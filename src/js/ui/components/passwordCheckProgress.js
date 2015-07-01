var React = require('react');

var Alert = require('./alert');


module.exports = React.createClass({
  render: function() {
    var derivingMsg = null;

    if (this.props.nowDerivingKeys) {
      derivingMsg = "Checking password....."
    }

    if (this.props.derivingKeysError) {
      var errorMsg = this.props.derivingKeysError.toString();

      derivingMsg = (
        <div className="error">Sorry, password incorrect!</div>
      );
    }

    if (derivingMsg) {
      derivingMsg = (
        <Alert msg={derivingMsg} />
      );
    }
        
    return (
      <div className="check-password-result">
        {derivingMsg}
      </div>
    );
  },

});




