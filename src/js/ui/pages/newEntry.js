var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  EntryEditor = require('../components/entryEditor');

import { connectRedux } from '../helpers/decorators';




var Component = React.createClass({
  render: function() { 
    let diaryMgr = this.props.data.diary.diaryMgr;

    let loaded = !!diaryMgr.entries,
      todayEntry = diaryMgr.getEntryForNow(),
      todayEntryId = _.get(todayEntry, 'id');

    return (
      <div className="newEntry">
        <EntryEditor entryId={todayEntryId} entryDataReady={loaded} />
      </div>
    );
  },
});



module.exports = connectRedux()(Component);