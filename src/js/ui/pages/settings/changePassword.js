import React from 'react';


import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import ChangePassword from '../../components/settings/changePassword';


module.exports = React.createClass({
  render: function() { 
    return (
      <Layout tab="changePassword" {...this.props}>
        <ChangePassword {...this.props} />
      </Layout>
    );
  },
});
