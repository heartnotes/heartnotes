var _ = require('lodash'),
  React = require('react');

var AskUserDialog = require('./askUserDialog');


module.exports = React.createClass({
  render: function() {
    return (
      <AskUserDialog
        ref="dialog"
        msg="Please remember your password. You cannot recover it once forgotten!"
        allowDialogCancel={true}
        buttons={["Ok"]} />
    );
  },


  ask: function(callback) {
    this.refs.dialog.ask(() => {
      callback(true);
    });
  },

});



          
