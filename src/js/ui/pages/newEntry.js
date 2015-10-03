var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  render: function() { 
    return (
      <div className="newEntry">
        <FluxComponent connectToStores={{
          entries: store => ({
            entryId: _.get(store.getToday(), 'id'),
            entryDataReady: store.state.entryDataReady,
          }),
        }}>
          <EntryEditor />
        </FluxComponent>
      </div>
    );
  },
});
