import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import Loading from '../../components/loading';


module.exports = React.createClass({
  render: function() { 
    return (
      <Layout>
        <div className="splash">
          <Loading />
        </div>
      </Layout>
    );
  },
});
