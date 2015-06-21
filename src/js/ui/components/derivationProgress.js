var React = require('react');


module.exports = React.createClass({
  render: function() {
    var derivingMsg = null;

    if (this.props.nowDerivingKeys) {
      derivingMsg = (
        <div>Deriving.....</div>
      );
    }

    if (this.props.derivingKeysError) {
      var errorMsg = this.props.derivingKeysError.toString();

      derivingMsg = (
        <div>
          {derivingMsg}
          <div className="error">{errorMsg}</div>
        </div>
      );
    }

    return derivingMsg;
  },

});




