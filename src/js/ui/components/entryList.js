import React from 'react';
import Classnames from 'classnames';

var _ = require('lodash'),
  moment = require('moment');


var FormatUtils = require('../../utils/format'),
  SortingUtils = require('../../utils/sorting'),
  DateString = require('./date');


var EntryListItem = React.createClass({
  propTypes: {
    entry: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool,
    isSearchResult: React.PropTypes.bool,
    truncLength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      selected: false,
      isSearchResult: false,
      truncLength: 300,
    };
  },

  render: function() {
    let classes = Classnames({
      'entry': true,
      selected: !!this.props.selected,
    });

    let date = moment(this.props.entry.ts);

    let entryText = FormatUtils.htmlToStr(this.props.entry.body),
      pruned = _.trunc(entryText, this.props.truncLength);

    let dayFormat = this.props.isSearchResult ? 'MMMD' : 'D';
    let dayClasses = Classnames({
      day: true,
      month: !!this.props.isSearchResult,
    });

    return (
      <li className={classes} onClick={this._onClick}>
        <div className="inner">
          <div className="date-time">
            <DateString format={dayFormat} date={date} className={dayClasses} /> 
            <DateString format="HH:mm" date={date} className="time" /> 
          </div>
          <span className="text">{pruned}</span>
        </div>
      </li>
    );
  },


  _onClick: function() {
    this.props.onClick(this.props.entry.id);
  },

});




module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.object,
    searchKeyword: React.PropTypes.string,
    selected: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      entries : {},
      searchKeyword: null,
      selected: null,
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
    listItems.push(
      <EntryListItem 
        key={entry.id} 
        entry={entry} 
        selected={this.props.selected === entry.id} 
        isSearchResult={!!this.props.searchKeyword}
        onClick={this._onSelect} />
    );
  },


  _onSelect: function(id) {
    if (this.props.onSelect) {
      this.props.onSelect(id);
    }
  },

});

