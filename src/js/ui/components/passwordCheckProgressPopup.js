var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.nowDerivingKeys) {
      derivingMsg = (
        <div>Checking password.....</div>
      );
    }

    if (this.props.derivingKeysError) {
      derivingMsg = (
        <div className="error">Sorry, password incorrect!</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




