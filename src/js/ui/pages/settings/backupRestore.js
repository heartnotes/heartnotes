import React from 'react';

import Layout from './layout';
import BackupFile from '../../components/settings/backupFile';
import RestoreFile from '../../components/settings/restoreFile';
import ExportData from '../../components/settings/exportData';

module.exports = React.createClass({
  render: function() { 
    return (
      <Layout tab="backupRestore" {...this.props}>
        <BackupFile />
        <RestoreFile />
        <hr />
        <ExportData {...this.props} />
      </Layout>
    );
  },
});
