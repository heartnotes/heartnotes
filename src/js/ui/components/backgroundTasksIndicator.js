import _ from 'lodash';
import React from 'react';

import Loading from './loading'

import { connectRedux } from '../helpers/decorators';


var Component = React.createClass({
  getInitialState: function() {
    return {
      show: false,
    };
  },

  componentWillReceiveProps: function(props) {
    const tasks = _.get(props, 'data.app.backgroundTasks', []);

    const inProgressTasks = _.filter(tasks, (task) => {
      return !!task.inProgress;
    });

    // got some tasks
    if (inProgressTasks.length && !this.state.show) {
      if (!this._showTimer) {
        // show indicator after a short delay
        this._showTimer = setTimeout(() => {
          this.setState({
            show: true
          });        
        }, 10000);        
      }
    }
    // got no tasks
    else if (!inProgressTasks.length) {
      // else clear indicator timer and turn off indicator
      clearTimeout(this._showTimer);

      delete this._showTimer;

      this.setState({
        show: false,        
      });
    }
  },

  render: function() {
    let content = this.state.show ? (<Loading />) : null;

    return (
      <div className="background-tasks">
        {content}
      </div>
    )
  },
});


module.exports = connectRedux()(Component);

