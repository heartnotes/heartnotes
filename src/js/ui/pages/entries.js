import _ from 'lodash';
import React from 'react';

import Timeline from '../components/timeline';
import Icon from '../components/icon';
import ToggleButton from '../components/toggleButton';
import EntryEditor from '../components/entryEditor';

import { connectRedux, routing } from '../helpers/decorators';


var Component = React.createClass({
  getInitialState: function() {
    return {
      layout: 'split',
    };
  },

  render: function() { 
    let { diary } = this.props.data;

    let entries = diary.diaryMgr.entries;

    if (_.get(diary.searching.result, 'length')) {
      entries = _.map(diary.searching.result, (result) => {
        return entries[result.ref];
      });
    }

    let entryId = _.get(this.props.data, 'router.params.entryId');

    return (
      <div className={"entriesView " + this.state.layout}>
        <div>
          <Timeline 
            entries={entries}
            selected={entryId}
            searchKeyword={diary.searchKeyword}
            onSelect={this._onSelect} />
          <ToggleButton 
            openClass="toggle-timeline open"
            closeClass="toggle-timeline closed"
            initiallyOpen={true}
            onChange={this._onToggleTimeline} />
          <EntryEditor 
            entryId={entryId}
            canDelete={true} 
            {...this.props} />
        </div>
      </div>
    );
  },


  _onSelect: function(entryId) {
    this.props.history.navigate(`/entries/${entryId}`);
  },


  _onToggleTimeline: function(isOpen) {
    this.setState({
      layout: (isOpen ? 'split' : 'noTimeline')
    });
  },

});



module.exports = connectRedux()(routing()(Component));



