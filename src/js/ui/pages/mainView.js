var _ = require('lodash'),
  React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var Timeline = require('../components/timeline'),
  Icon = require('../components/icon'),
  ToggleButton = require('../components/toggleButton'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      entries: [],
      selected: null,
      layout: 'split'
    };
  },

  render: function() { 
    var self = this;

    var editingEntry = null;

    if (self.state.selected) {
      var editingEntry = _.find(this.state.entries, function(entry) {
        return entry.id === self.state.selected;
      });
    }

    return (
      <div className={"mainView " + this.state.layout}>
        <Timeline 
          entries={this.state.entries} 
          selected={this.state.selected}
          onSelect={this._onSelect} />
        <ToggleButton 
          openClass="toggle-timeline open"
          closeClass="toggle-timeline closed"
          initiallyOpen={true}
          onChange={this._onToggleTimeline} />
        <EntryEditor entry={editingEntry} />
      </div>
    );
  },


  _onSelect: function(entryId) {
    this.setState({
      selected: entryId
    });
  },


  _onToggleTimeline: function(isOpen) {
    this.setState({
      layout: (isOpen ? 'split' : 'noTimeline')
    });
  },

});
