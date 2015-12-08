import _ from 'lodash';
import React from 'react';

import { connectRedux } from '../helpers/decorators';
import Loading from './loading';


var Component = React.createClass({
  propTypes: {
    searchKeyword: React.PropTypes.string,
  },
  
  getDefaultProps: function() {
    return {
      searchKeyword: null,
    };
  },

  getInitialState: function() {
    return {
      keyword: null,
    };
  },
  
  render: function() {
    let filter = null,
      summary = null;

    let searchIndexing = this.props.data.diary.searchIndexing;

    if (!searchIndexing.success) {
      filter = (
        <Loading text="Rebuilding search..." />
      );
    } else {
      let filterText = null;

      let keyword = this.state.keyword;

      filter = (
        <input ref="input" value={keyword} type="text" placeholder="Search..." onChange={this._onChange} />
      );

      if (keyword) {
        summary = (
          <span className="filter-summary">Filter by: {keyword}</span>
        );
      }
    }
    return (
      <div className="entry-list-filter">
        {filter}
        {summary}
      </div>
    );
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.searchKeyword !== this.state.keyword) {
      this.setState({
        keyword: newProps.searchKeyword
      });
    }
  },
  

  _onChange: function(e) {
    let keyword = e.currentTarget.value;

    this.setState({
      keyword: keyword,
    });

    this.props.actions.search(keyword);
  },

});


module.exports = connectRedux([
  'search'
])(Component);

