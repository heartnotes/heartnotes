var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.data.diary.changingPassword.inProgress) {
      if (this.props.data.diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Saving new password.....</div>
        );
      }
    }

    if (this.props.data.diary.changingPassword.error) {
      derivingMsg = (
        <div className="error">{this.props.data.diary.changingPassword.error.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




