import _ from 'lodash';
import React from 'react';

import AttentionIcon from './attentionIcon';
import Footer from './footer';
import { connectRedux } from '../helpers/decorators';


class Component extends React.Component {
  render() {
    let { diaryMgr } = this.props.data.diary;

    let footerItems = [];

    if (!diaryMgr.auth.subscriptionActive) {
      footerItems.push(
        <p key="sub">
          Subscription expired! Your diary entries will not be backed up or synced.
        </p>
      );
    }

    let { backgroundTasks } = this.props.data.app;

    _.each(backgroundTasks, (task) => {
      if (task.error) {
        footerItems.push(
          <p key={task.id}>{task.desc}: {task.msg}</p>
        )
      }
    });

    if (footerItems.length) {
      return (
        <Footer className="error-messages">
          {footerItems}
        </Footer>
      );
    } else {
      return null;
    }
  }

}


module.exports = connectRedux()(Component);

