import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import StartLocal from '../../components/welcome/start/local';
import StartCloud from '../../components/welcome/start/cloud';
import { routing } from '../../helpers/decorators';
import IconLink from '../../components/iconLink';


var Component = React.createClass({
  render: function() { 
    let activeTab = _.get(this.props, 'location.query.mode', null);
    if (!_.contains(['local', 'cloud'], activeTab)) {
      activeTab = 'local';
    }

    let activeContent = 'local' === activeTab ? <StartLocal /> : <StartCloud />;

    let switchAnchor = 'local' === activeTab ? (
      <div>
        Your diary will only be accessible in this browser.
        <IconLink icon="refresh" text="Switch to cloud sync mode" onClick={this._show('cloud')} />
      </div>
    ) : (
      <div>
        Your diary will be accessible from other devices.
        <IconLink icon="refresh" text="Switch to local-only mode" onClick={this._show('local')} />
      </div>
    );

    return (
      <Layout>
        <div className="start">
          <div className='switch'>{switchAnchor}</div>
          {activeContent}
        </div>
      </Layout>
    );
  },


  _show: function(mode) {
    return () => {
      this.props.router.push(`/welcome?mode=${mode}`);
    }
  }

});


module.exports = routing()(Component);



