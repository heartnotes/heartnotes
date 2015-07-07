var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.nowDerivingKeys) {
      derivingMsg = "Generating encryption keys....."
    }

    if (this.props.derivingKeysError) {
      derivingMsg = (
        <div className="error">Sorry, there was a problem generating encryption keys!</div>
      );
    }

    return (
      <Popup msg={derivingMsg} showPopup={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




