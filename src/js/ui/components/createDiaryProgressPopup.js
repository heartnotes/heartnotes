var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.nowCreatingDiary) {
      if (this.props.nowDerivingKeys) {
        derivingMsg = (
          <div>Saving new diary.....</div>
        );
      }
    }

    if (this.props.createDataFileError) {
      derivingMsg = (
        <div className="error">{this.props.createDataFileError.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




