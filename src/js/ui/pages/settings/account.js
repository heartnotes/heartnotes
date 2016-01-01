import React from 'react';

import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import ChangePassword from '../../components/settings/changePassword';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    return (
      <Layout tab="account" {...this.props}>
        <div className="email-address">
          <h2>Email address</h2>
          <p>{diaryMgr.id}</p>
        </div>
        <ChangePassword {...this.props} />
      </Layout>
    );
  },
});



module.exports = connectRedux()(Component);

