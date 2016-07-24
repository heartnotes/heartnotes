var React = require('react');

var _ = require('lodash'),
  moment = require('moment');


var FormatUtils = require('../../utils/format'),
  SortingUtils = require('../../utils/sorting'),
  DateString = require('./date');



module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      entries : {},
    };
  },

  render: function() {
    var entries = SortingUtils.sortEntriesForwardChrono(this.props.entries);

    entries = _.map(entries, (entry) => {
      return (
        <div>
          <h2><DateString format="MMMM Do, YYYY" date={moment(entry.ts)} /></h2>
          <div dangerouslySetInnerHTML={{__html: entry.body}} />
        </div>
      );
    });

    return (
      <html>
        <head>
          <title>Heartnotes diary entries</title>
          <meta name="author" content="Heartnotes" />
        </head>
        <body>
          <h1>Diary entries</h1>
          <p><em>Exported from <a href="http://heartnotes.me">Heartnotes</a>.</em></p>
          {entries}
        </body>
      </html>
    );
  },

});

