var React = require('react');

var moment = require('moment');

var Entries = require('../../data/entries'),
  Timeline = require('../components/timeline'),
  Editor = require('../components/editor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      entry: Entries.getToday()
    };
  },

  render: function() { 
    var dateFormat = moment(
      this.state.entry ? this.state.entry.ts : undefined
    ).format('MMMM Mo');

    var body = this.state.entry ? this.state.entry.body : '';

    return (
      <div className="newEntry">
        <div className="meta">
          {dateFormat}
        </div>
        <Editor body={body} />
      </div>
    );
  },
});
