var React = require('react');

var ActionProgress = require('./actionProgress');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    let { diary } = this.props.data;

    if (diary.creating.inProgress) {
      if (diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Saving new diary.....</div>
        );
      }
    }

    if (diary.creating.error) {
      derivingMsg = (
        <div className="error">{diary.creating.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={derivingMsg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




