import React from 'react';

import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import ChangePassword from '../../components/settings/changePassword';
import Membership from '../../components/settings/membership';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let changePassword = null;

    if ( diaryMgr.auth.isCloudType ) {
      changePassword = (
        <div>
          <hr />
          <ChangePassword {...this.props} />
        </div>
      );
    }

    return (
      <Layout tab="account" {...this.props}>
        <Membership />
        {changePassword}
      </Layout>
    );
  },
});



module.exports = connectRedux()(Component);

