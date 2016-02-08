import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import StartCloud from '../../components/welcome/start/cloud';
import { connectRedux, routing } from '../../helpers/decorators';
import IconLink from '../../components/iconLink';


var Component = React.createClass({
  render: function() { 
    return (
      <Layout>
        <div className="start">
          <StartCloud />
        </div>
      </Layout>
    );

  },

});


module.exports = connectRedux()(routing()(Component));



