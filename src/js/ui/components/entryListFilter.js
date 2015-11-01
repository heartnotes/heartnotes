import _ from 'lodash';
import React from 'react';

import { connectRedux, storeMethods } from '../helpers/decorators';


var Component = React.createClass({
  getInitialState: function() {
    return {
      keyword: null,
    };
  },
  
  render: function() {
    let filterText = null;

    let keyword = this.state.keyword;

    return (
      <div className="entry-list-filter">
        <input ref="input" value={keyword} type="text" placeholder="Search..." onChange={this._onChange} />
      </div>
    );
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.data.diary.searching.keyword !== this.state.keyword) {
      this.setState({
        keyword: newProps.data.diary.searching.keyword
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

