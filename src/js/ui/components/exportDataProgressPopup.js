var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.data.diary.exporting.inProgress) {
      derivingMsg = (
        <div>Exporting data.....</div>
      );
    }

    if (this.props.data.diary.exporting.error) {
      derivingMsg = (
        <div className="error">{this.props.data.diary.exporting.error.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




