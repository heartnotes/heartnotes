var React = require('react');

var EntryList = require('./entryList');


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
    return (
      <div className="timeline">
        <EntryList entries={this.props.entries} />
      </div>
    );
  },

});

