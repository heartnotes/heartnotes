var React = require('react');

var EntryList = require('./entryList'),
  EntryListFilter = require('./entryListFilter');


module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.array,
    updateFilter: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      entries : [],
      updateFilter: null,
    };
  },

  render: function() {
    return (
      <div className="timeline">
        <EntryListFilter onUpdate={this.props.updateFilter} />
        <EntryList entries={this.props.entries} />
      </div>
    );
  },

});



