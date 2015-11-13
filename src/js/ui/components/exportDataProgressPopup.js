var React = require('react');

var ActionProgress = require('./actionProgress');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    let { diary } = this.props.data;

    if (diary.exporting.inProgress) {
      derivingMsg = (
        <div>Exporting data.....</div>
      );
    }

    if (diary.exporting.error) {
      derivingMsg = (
        <div className="error">{diary.exporting.error.toString()}</div>
      );
    }

    return (
      <ActionProgress msg={derivingMsg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




