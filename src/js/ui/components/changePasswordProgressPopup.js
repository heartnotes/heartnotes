var React = require('react');

var ActionProgress = require('./actionProgress');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    let { diary } = this.props.data;

    if (diary.changingPassword.inProgress) {
      derivingMsg = (
        <div>Saving new password.....</div>
      );
    }

    if (diary.changingPassword.error) {
      derivingMsg = (
        <div className="error">{diary.changingPassword.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={derivingMsg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




