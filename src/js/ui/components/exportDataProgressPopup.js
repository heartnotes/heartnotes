var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.nowExportingData) {
      derivingMsg = (
        <div>Exporting data.....</div>
      );
    }

    if (this.props.exportDataError) {
      derivingMsg = (
        <div className="error">{this.props.exportDataError.toString()}</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




