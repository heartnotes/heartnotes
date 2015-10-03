var React = require('react');

var Popup = require('./popup');


module.exports = React.createClass({

  render: function() {
    var derivingMsg = null;

    if (this.props.data.diary.opening.inProgress) {
      if (this.props.data.diary.derivingKeys.inProgress) {
        derivingMsg = (
          <div>Checking password.....</div>
        );
      }
    }

    if (this.props.data.diary.opening.error) {
      derivingMsg = (
        <div className="error">Sorry, password incorrect!</div>
      );
    }

    return (
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




