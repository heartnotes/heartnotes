var React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  render: function() { 
    return (
      <div className="newEntry">
        <FluxComponent connectToStores={{
          entries: store => ({
            entry: store.getToday(),
          }),
        }}>
          <EntryEditor />
        </FluxComponent>
      </div>
    );
  },
});
