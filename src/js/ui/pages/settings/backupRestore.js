import React from 'react';

import Layout from './layout';
import BackupFile from '../../components/settings/backupFile';

module.exports = React.createClass({
  render: function() { 
    return (
      <Layout tab="backupRestore" {...this.props}>
        <BackupFile />
      </Layout>
    );
  },
});
