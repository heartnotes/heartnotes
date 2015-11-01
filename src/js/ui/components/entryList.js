var React = require('react');

var _ = require('lodash'),
  moment = require('moment');


var FormatUtils = require('../../utils/format'),
  SortingUtils = require('../../utils/sorting'),
  DateString = require('./date');



module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.object,
    searchKeyword: React.PropTypes.string,
    selected: React.PropTypes.string,
    truncLength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      entries : {},
      searchKeyword: null,
      selected: null,
      truncLength: 300,
    };
  },

  render: function() {
    var listItems = [];

    if (this.props.searchKeyword) {
      this._buildSearchResults(listItems, this.props.entries);
    } else {
      this._buildSortedEntries(listItems, this.props.entries);
    }

    return (
      <ul className="entryList">
        {listItems}
      </ul>
    );
  },


  _buildSearchResults: function(listItems, entries) {
    listItems.push(
      <li className="break-row" key='results-header'>
        Filter: {'"' + this.props.searchKeyword + '"'}
      </li>
    );

    if (!entries.length) {
      listItems.push(
        <li key="noentry" className="entry none">No results found.</li>
      );
    } else {
      _.forEach(entries, (entry) => {
        this._addEntryToList(listItems, entry);
      });
    }
  },


  _buildSortedEntries: function(listItems, entries) {
    var lastMonthYear = moment(0);

    entries = SortingUtils.sortEntriesReverseChrono(entries);

    _.forEach(entries, (entry) => {
      var date = moment(entry.ts);

      // if month different to current month then set as current month and display it
      if (date.month() !== lastMonthYear.month() || date.year() !== lastMonthYear.year()) {
        var monthFormat = 'MMMM';

        // if year is different then add as suffix
        if (date.year() !== lastMonthYear.year()) {
          monthFormat += ' ' + 'YYYY';
        }

        listItems.push(
          <li className="break-row" key={date.valueOf()}>
            <DateString format={monthFormat} date={date} /> 
          </li>
        );

        lastMonthYear = date;
      }

      this._addEntryToList(listItems, entry);
    });

    // if empty
    if (!listItems.length) {
      listItems.push(
        <li key="noentry" className="entry none">No entries.</li>
      )
    }
  },


  _addEntryToList: function(listItems, entry) {
    let date = moment(entry.ts);

    let entryText = FormatUtils.htmlToStr(entry.body),
      pruned = _.trunc(entryText, this.props.truncLength);

    let selectedClass = (this.props.selected === entry.id ? 'selected': '');

    listItems.push(
      <li key={entry.id} 
        data-id={entry.id} 
        className={"entry " + selectedClass}
        onClick={this._onSelect}>
          <DateString format="D" date={date} /> 
          <span className="text">{pruned}</span>
      </li>
    );
  },


  _onSelect: function(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e.currentTarget.dataset.id);
    }
  },

});

