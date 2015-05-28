var React = require('react');

var _ = require('lodash'),
  moment = require('moment');


var DateString = require('./date');



module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.array,
    truncLength: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      entries : [],
      truncLength: 300,
    };
  },

  render: function() {
    var self = this;

    var listItems = [],
      lastMonthYear = moment(0);

    this.props.entries.forEach(function(entry) {
      var date = moment.unix(entry.ts);

      // if month different to current month then set as current month and display it
      if (date.month() !== lastMonthYear.month() || date.year() !== lastMonthYear.year()) {
        var monthFormat = 'MMMM';

        // if year is different then add as suffix
        if (date.year() !== lastMonthYear.year()) {
          monthFormat += ' ' + 'YYYY';
        }

        listItems.push(
          <div className="month">
            <DateString format={monthFormat} date={date} /> 
          </div>
        );

        lastMonthYear = date;
      }

      var pruned = _.trunc(entry.body, self.props.truncLength);

      listItems.push(
        <div className="entry">
          <DateString format="D" date={date} /> 
          <span className="text">{pruned}</span>
        </div>
      )
    });

    return (
      <div className="entryList">
        {listItems}
      </div>
    );
  },

});

