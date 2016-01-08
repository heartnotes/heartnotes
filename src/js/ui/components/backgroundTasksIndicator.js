import _ from 'lodash';
import React from 'react';

import Loading from './loading'

import { connectRedux } from '../helpers/decorators';


var Component = React.createClass({
  render: function() {
    let { app } = this.props.data;

    let { backgroundTasks } = app;

    let inProgressTasks = _.filter(backgroundTasks, (task) => {
      return !!task.inProgress;
    });

    let content = null;

    if (inProgressTasks.length) {
      content = (
        <Loading />
      );
    }

    return (
      <div className="background-tasks">
        {content}
      </div>
    )
  },
});


module.exports = connectRedux()(Component);

