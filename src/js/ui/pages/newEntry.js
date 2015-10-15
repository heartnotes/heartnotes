var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');

import { connectRedux } from '../helpers/decorators';




var Component = React.createClass({
  render: function() { 
    let entryId = this.props.data.diary.entries[];

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



module.exports = connectRedux(
  'getTodayEntry'
)(Component);