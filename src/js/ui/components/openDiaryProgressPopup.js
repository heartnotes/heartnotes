var React = require('react');

var Popup = require('./popup');


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
      <Popup msg={derivingMsg} show={!!derivingMsg}>
        {this.props.children}
      </Popup>
    );
  },

});




