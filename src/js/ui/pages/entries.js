var _ = require('lodash'),
  React = require('react');

var Router = require('react-router');
var { Link, Navigation } = Router;

var Timeline = require('../components/timeline'),
  Icon = require('../components/icon'),
  ToggleButton = require('../components/toggleButton'),
  EntryEditor = require('../components/entryEditor');


var Component = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      layout: 'split',
    };
  },

  render: function() { 
    let entryData = {
      entries: this.props.data.entries,
      entryDataReady: !!this.props.data.entries,
      entryId: this.props.params.entryId,
    };

    return (
      <div className={"entriesView " + this.state.layout}>
        <Timeline 
          {...entryData}
          selected={this.props.params.entryId}
          onSelect={this._onSelect} />
        <ToggleButton 
          openClass="toggle-timeline open"
          closeClass="toggle-timeline closed"
          initiallyOpen={true}
          onChange={this._onToggleTimeline} />
        <EntryEditor {...entryData} canDelete={true} />
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



module.exports = connectRedux()(storeMethods()(Component));



