var React = require('react');

var ActionProgress = require('./actionProgress');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    let { diary } = this.props.data;

    if (diary.opening.inProgress) {
      if (diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Checking password.....</div>
        );
      }
    }

    if (diary.opening.error) {
      derivingMsg = (
        <div className="error">Sorry, password incorrect!</div>
      );
    }

    return (
      <ActionProgress msg={derivingMsg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




