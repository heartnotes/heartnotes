var React = require('react');

var moment = require('moment');

var Entries = require('../../data/entries'),
  Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      entry: Entries.getToday()
    };
  },

  render: function() { 
    return (
      <div className="newEntry">
        <EntryEditor entry={this.state.entry} />
      </div>
    );
  },
});
