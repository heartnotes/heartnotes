import React from 'react';

import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import ChangePassword from '../../components/settings/changePassword';
import Membership from '../../components/settings/membership';
import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    return (
      <Layout tab="account" {...this.props}>
        <Membership />
        <hr />
        <ChangePassword {...this.props} />
      </Layout>
    );
  },
});



module.exports = connectRedux()(Component);

