import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import StartLocal from '../../ponents/welcome/start/local';
import StartCloud from '../../components/welcome/start/cloud';
import { connectRedux, routing } from '../../helpers/decorators';
import IconLink from '../../components/iconLink';


var Component = React.createClass({
  render: function() { 
    let activeTab = this._getActiveTab();

    let activeContent = 'local' === activeTab ? <StartLocal /> : <StartCloud />;

    let switchAnchor = 'local' === activeTab ? (
      <div>
        Your diary will only be accessible in this browser on this device.
        <IconLink icon="refresh" text="Switch to cloud sync mode" onClick={this._show('cloud')} />
      </div>
    ) : (
      <div>
        Your diary will be accessible from other browsers and devices.
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


  _getActiveTab: function() {
    let lastAccessedDiaryType = _.get(this.props.data, 'diary.lastAccessedDiaryType');

    let queryTab = _.get(this.props, 'location.query.mode', null);

    if (!queryTab && lastAccessedDiaryType) {
      return lastAccessedDiaryType;
    }

    if (!_.contains(['local', 'cloud'], queryTab)) {
      queryTab = 'local';
    }

    return queryTab;
  },


  _show: function(mode) {
    return () => {
      this.props.router.push(`/welcome?mode=${mode}`);
    }
  },

});


module.exports = connectRedux()(routing()(Component));



