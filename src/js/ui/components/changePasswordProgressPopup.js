var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.nowChangingPassword) {
      if (this.props.nowDerivingKeys) {
        derivingMsg = (
          <div>Saving new password.....</div>
        );
      }
    }

    if (this.props.changePasswordError) {
      derivingMsg = (
        <div className="error">{this.props.changePasswordError.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




