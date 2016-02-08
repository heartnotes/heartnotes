import _ from 'lodash';
import Q from 'bluebird';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux } from '../../helpers/decorators';
import LocalUser from './membership/localUser';
import CloudUser from './membership/cloudUser';




var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let subscriptionType = diaryMgr.auth.subscriptionType,
      subscriptionActive = diaryMgr.auth.subscriptionActive,
      subscriptionExpiry = diaryMgr.auth.subscriptionExpiry;

    let userMembershipDetails = diaryMgr.auth.isCloudType
      ? <CloudUser />
      : <LocalUser />;

    return (
      <div className="membership">
        <h2>Cloud sync</h2>
        {userMembershipDetails}
      </div>
    );
  },

});


module.exports = connectRedux()(Component);


