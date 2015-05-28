var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var Entries = require('../../data/entries'),
  Timeline = require('../components/timeline'),
  Icon = require('../components/icon'),
  ToggleButton = require('../components/toggleButton'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  getInitialState: function() {
    return {
      entries: Entries.get({
        order_by: 'date',
        order_desc: 'desc',
      })
    };
  },

  render: function() { 
    return (
      <div className="mainView">
        <Timeline entries={this.state.entries} />
        <ToggleButton 
          openClass="toggle-timeline open"
          closeClass="toggle-timeline closed"
          initiallyOpen={true}
          onChange={this._onToggleTimeline} />
        <EntryEditor />
      </div>
    );
  },


  _onToggleTimeline: function(isOpen) {
  },

});
