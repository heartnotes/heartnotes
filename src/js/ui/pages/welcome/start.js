import _ from 'lodash';
import React from 'react';

import TabMenu from '../../components/tabMenu';
import Layout from './layout';
import StartLocal from '../../components/welcome/start/local';
import StartCloud from '../../components/welcome/start/cloud';
import { routing } from '../../helpers/decorators';


const ITEMS = [
  {
    id: 'local',
    route: '/welcome',
    desc: 'Local',
  },
  {
    id: 'cloud',
    route: '/welcome?start=cloud',
    desc: 'Cloud login',
  },
];


var Component = React.createClass({
  render: function() { 
    const activeTab = _.get(this.props, 'location.query.start', 'local');

    let activeContent = 'local' === activeTab ? <StartLocal /> : <StartCloud />;

    return (
      <Layout>
        <div className="start">
          <TabMenu 
            className="start-menu" 
            items={ITEMS} 
            onSelect={this._onSelect} 
            selectedItem={activeTab}>
              {activeContent}
          </TabMenu>
        </div>
      </Layout>
    );
  },

  _onSelect: function(item) {
    this.props.router.push(item.route);
  },

});


module.exports = routing()(Component);



