var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    let { diary } = this.props.data;

    if (diary.changingPassword.inProgress) {
      if (diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Saving new password.....</div>
        );
      }
    }

    if (diary.changingPassword.error) {
      derivingMsg = (
        <div className="error">{diary.changingPassword.error.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




