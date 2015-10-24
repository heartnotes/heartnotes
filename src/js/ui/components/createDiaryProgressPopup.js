var React = require('react');

var Popup = require('./popup');


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
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




