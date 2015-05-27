var React = require('react');

var moment = require('moment');

var Timeline = require('../components/timeline'),
  Editor = require('../components/editor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      date: moment()
    };
  },

  render: function() { 
    var dateFormat = this.state.date.format('MMMM Mo');

    return (
      <div className="newEntry">
        <div className="meta">
          {dateFormat}
        </div>
        <Editor />
      </div>
    );
  },
});
