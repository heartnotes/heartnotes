var _ = require('lodash'),
  React = require('react');

import FluxComponent from 'flummox/component';

var Router = require('react-router');
var { Link, Navigation } = Router;

var Timeline = require('../components/timeline'),
  Icon = require('../components/icon'),
  ToggleButton = require('../components/toggleButton'),
  EntryEditor = require('../components/entryEditor');


module.exports = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      layout: 'split'
    };
  },

  render: function() { 
    return (
      <div className={"entriesView " + this.state.layout}>
        <FluxComponent connectToStores={{
          entries: store => ({
            entry: store.get(this.props.params.entryId),
            entries: store.search(),
          }),
        }}>
          <Timeline 
            selected={this.props.params.entryId}
            onSelect={this._onSelect} />
          <ToggleButton 
            openClass="toggle-timeline open"
            closeClass="toggle-timeline closed"
            initiallyOpen={true}
            onChange={this._onToggleTimeline} />
          <EntryEditor canDelete={true} />
        </FluxComponent>
      </div>
    );
  },


  _onSelect: function(entryId) {
    this.transitionTo('entries', {
      entryId: entryId
    });
  },


  _onToggleTimeline: function(isOpen) {
    this.setState({
      layout: (isOpen ? 'split' : 'noTimeline')
    });
  },

});
