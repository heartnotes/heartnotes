var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var ChangePassword = require('./changePassword'),
  ExportData = require('./exportData');

module.exports = React.createClass({
  render: function() { 
    return (
      <div className="settingsView">
        <ChangePassword {...this.props} />        
        <ExportData {...this.props} />
      </div>
    );
  },
});
