import _ from 'lodash';
import React from 'react';
import { Link, Navigation } from 'react-router';

import Timeline from '../components/timeline';
import Icon from '../components/icon';
import ToggleButton from '../components/toggleButton';
import EntryEditor from '../components/entryEditor';

import { connectRedux } from '../helpers/decorators';


var Component = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      layout: 'split',
    };
  },

  render: function() { 
    let entries = this.props.methods.getTimelineEntries();
    let entryId = this.props.params.entryId;

    return (
      <div className={"entriesView " + this.state.layout}>
        <div>
          <Timeline 
            entries={entries}
            selected={entryId}
            searchKeyword={this.props.data.diary.searching.keyword}
            onSelect={this._onSelect} />
          <ToggleButton 
            openClass="toggle-timeline open"
            closeClass="toggle-timeline closed"
            initiallyOpen={true}
            onChange={this._onToggleTimeline} />
          <EntryEditor 
            entryId={entryId}
            canDelete={true} />
        </div>
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



module.exports = connectRedux()(Component);



