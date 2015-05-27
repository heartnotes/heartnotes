var React = require('react');


module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      entries : [],
    };
  },

  render: function() {
    var entries = this.props.entries.map(function(entry) {
      return (
        <li>
          {entry.ts} - {entry.body}
        </li>
      );
    });

    return (
      <ul className="entryList">{entries}</ul>
    );
  },

});

