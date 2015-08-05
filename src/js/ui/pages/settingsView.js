var React = require('react');

import FluxComponent from 'flummox/component';

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  render: function() { 
    return (
      <div className="settingsView">
        <form>
          <input type="password" />
        </form>
      </div>
    );
  },
});
