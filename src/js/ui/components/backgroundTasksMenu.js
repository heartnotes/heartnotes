import _ from 'lodash';
import React from 'react';

import Loading from './loading'

import { connectRedux } from '../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let { app } = this.props.data;

    let { backgroundTasks } = app;

    let tasks = _.values(backgroundTasks);

    let content = null;

    if (tasks.length) {
      content = (
        <Loading />
      )
    }

    return (
      <div className="background-tasks">
        {content}
      </div>
    )
  },
});


module.exports = connectRedux()(Component);

