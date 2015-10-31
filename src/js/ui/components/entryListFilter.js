import _ from 'lodash';
import React from 'react';

import Loading from './loading';
import { connectRedux } from '../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let filterText = null;

    let keyword = _.get(this.props.diary, 'searching.keyword');
    if (keyword && keyword.length) {
      filterText = (
        <div className="filter-description">Filter by {keyword}</div>
      );
    }

    let loading = null;
    if (_.get(this.props.data.diary, 'searching.inProgress')) {
      loading = (
        <Loading />
      );
    }

    return (
      <div className="entry-list-filter">
        <input value={keyword} type="text" placeholder="Filter..." onChange={this._onChange} />
        {loading}
        {filterText}
      </div>
    );
  },


  _onChange: function(e) {
    this.props.actions.search(e.currentTarget.value);
  }

});


module.exports = connectRedux([
  'search'
])(Component);

