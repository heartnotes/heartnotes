var React = require('react');

var _ = require('lodash'),
  moment = require('moment');


var DateString = require('./date');



module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.array,
    selected: React.PropTypes.string,
    truncLength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      entries : [],
      selected: null,
      truncLength: 300,
    };
  },

  render: function() {
    var self = this;

    var listItems = [],
      lastMonthYear = moment(0);

    _.forEach(self.props.entries, function(entry) {
      var date = moment.unix(entry.ts);

      // if month different to current month then set as current month and display it
      if (date.month() !== lastMonthYear.month() || date.year() !== lastMonthYear.year()) {
        var monthFormat = 'MMMM';

        // if year is different then add as suffix
        if (date.year() !== lastMonthYear.year()) {
          monthFormat += ' ' + 'YYYY';
        }

        listItems.push(
          <li className="month" key={date.valueOf()}>
            <DateString format={monthFormat} date={date} /> 
          </li>
        );

        lastMonthYear = date;
      }

      var pruned = _.trunc(entry.body, self.props.truncLength),
        selectedClass = (self.props.selected === entry.id ? 'selected': '');

      listItems.push(
        <li key={entry.id} 
          data-id={entry.id} 
          className={"entry " + selectedClass}
          onClick={self._onSelect}>
            <DateString format="D" date={date} /> 
            <span className="text">{pruned}</span>
        </li>
      )
    });

    return (
      <ul className="entryList">
        {listItems}
      </ul>
    );
  },


  _onSelect: function(e) {
    if (this.props.onSelect) {
      this.props.onSelect(e.currentTarget.dataset.id);
    }
  },


});

