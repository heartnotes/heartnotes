import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import Loading from '../../components/loading';
import { connectRedux, routing } from '../../helpers/decorators';
import * as StringUtils from '../../../utils/string';




var Component = React.createClass({
  render: function() { 
    let progressMsg = 
      _.get(this.props, 'data.diary.derivingKeys.progressMsg')
        || 'Please wait...';

    return (
      <Layout>
        <div className="new-local-diary">
          <Loading text={progressMsg} />
        </div>
      </Layout>
    );
  },


  componentDidMount: function() {
    setTimeout(() => {
      let { localDiaryId } = this.props.data.diary;

      let promise = null;

      if (localDiaryId) {
        promise = this.props.actions.openDiary(
          'local',
          localDiaryId,
          StringUtils.DEFAULT_PASSWORD
        );
      } else {
        promise = this.props.actions.createDiary(
          'local', 
          StringUtils.generateLocalDiaryId(),
          StringUtils.DEFAULT_PASSWORD
        );
      }

      promise.then(() => {
        this.props.router.push('/welcome/loadDiary');
      });
    }, 2000);
  },
});



module.exports = connectRedux([
  'openDiary',
  'createDiary',
])(routing()(Component));



