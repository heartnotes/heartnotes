var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.data.diary.creating.inProgress) {
      if (this.props.data.diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Saving new diary.....</div>
        );
      }
    }

    if (this.props.data.diary.creating.error) {
      derivingMsg = (
        <div className="error">{this.props.data.diary.creating.error.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




