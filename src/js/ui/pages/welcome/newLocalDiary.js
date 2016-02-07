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
        || 'Creating new diary...';

    return (
      <Layout>
        <div className="new-local-diary">
          <Loading text={progressMsg} />
        </div>
      </Layout>
    )
  },


  componentDidMount: function() {
    setTimeout(() => {
      this.props.actions.createDiary(
        'local', 
        StringUtils.generateLocalDiaryId(),
        StringUtils.DEFAULT_PASSWORD
      )
        .then(() => {
          this.props.router.push('/welcome/loadDiary');
        });
    }, 2000);
  },
});



module.exports = connectRedux([
  'createDiary'
])(routing()(Component));



