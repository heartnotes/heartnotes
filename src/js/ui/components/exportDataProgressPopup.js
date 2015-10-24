var React = require('react');

var Popup = require('./popup');


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
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




