var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');

import { connectRedux, storeMethods } from '../helpers/decorators';




var Component = React.createClass({
  render: function() { 
    let loaded = !!this.props.data.entries,
      todayEntryId = this.props.data.getTodayEntry();

    return (
      <div className="newEntry">
        <EntryEditor entryId={todayEntryId} entryDataReady={loaded} />
      </div>
    );
  },
});



module.exports = connectRedux()(storeMethods()(Component));