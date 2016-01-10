var _ = require('lodash'),
  React = require('react');

var Overlay = require('./overlay'),
  Button = require('./button');


module.exports = React.createClass({
  propTypes: {
    msg : React.PropTypes.string.isRequired,
    buttons : React.PropTypes.array,
    allowDialogCancel: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      buttons: ['OK'],
      allowDialogCancel: false,
    };
  },


  render: function() {
    var buttons = _.map(this.props.buttons, (btn, idx) => {
      return (
        <Button key={idx} onClick={this._buildClickHandler(btn)}>{btn}</Button>
      );
    });

    return (
      <Overlay ref="overlay" showCancelButton={this.props.allowDialogCancel}>
        <div className="ask-user-dialog">
          <div className="msg">{this.props.msg}</div>
          <div className="buttons">{buttons}</div>
        </div>
      </Overlay>
    );
  },


  ask: function(callback) {
    this.refs.overlay.show();
    this.callback = callback;
  },


  _buildClickHandler: function(btnName) {
    return () => {
      this.refs.overlay.hide();

      this.callback(btnName);
      
      delete this.callback;
    };
  },

});



          
