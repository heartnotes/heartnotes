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
    let content = null;

    let searchIndexing = this.props.data.diary.searchIndexing;

    if (!searchIndexing.success) {
      content = (
        <Loading text="Rebuilding search..." />
      );
    } else {
      let filterText = null;

      let keyword = this.state.keyword;

      content = (
        <input ref="input" value={keyword} type="text" placeholder="Search..." onChange={this._onChange} />
      );
    }
    return (
      <div className="entry-list-filter">{content}</div>
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

