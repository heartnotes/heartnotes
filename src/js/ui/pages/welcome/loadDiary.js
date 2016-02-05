import _ from 'lodash';
import React from 'react';

import Icon from '../../components/icon';
import Button from '../../components/button';
import Loading from '../../components/loading';
import Layout from './layout';
import { connectRedux, routing } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    let activity = this.props.data.diary.loadingEntries;

    let progressMsg = (
      <Loading text="Loading diary" />
    );
    
    let progressMsg2 = _.get(this.props.data.diary.decryptEntries, 'progressMsg');

    let loadingError = null;
    if (activity.error) {
      progressMsg = 'Loading diary failed!';

      let msg = (
        <span>{activity.error.toString()}</span>
      );

      loadingError = (
        <div>
          <div className="error">
            <Icon name="exclamation-triangle" />
            {msg}
          </div>
          <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
        </div>
      );
    }

    return (
      <Layout>
        <div className="load-diary">
          <p>{progressMsg}</p>
          <p className="progress-message">{progressMsg2}</p>
          {loadingError}
        </div>
      </Layout>
    );
  },

  componentDidMount: function(oldProps) {
    if (!_.get(this.props, 'data.diary.diaryMgr')) {
      return this.props.router.push('/welcome');
    }

    this.props.actions.loadEntries()
      .then(() => {
        this.props.router.push('/newEntry');
      });
  },

  _goBack: function() {
    this.props.actions.closeDiary();

    this.props.router.push('/welcome');
  },

});



module.exports = connectRedux([
  'closeDiary',
  'loadEntries',
])(routing()(Component));

