import _ from 'lodash';
import Q from 'bluebird';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux } from '../../../helpers/decorators';
import DateFormat from '../../date';
import Button from '../../button';
import AttentionIcon from '../../attentionIcon';
import Loading from '../../loading';
import RenewalOverlay from './renewalOverlay';
import FetchPricingButton from './fetchPricingButton';



var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let subscriptionType = diaryMgr.auth.subscriptionType,
      subscriptionActive = diaryMgr.auth.subscriptionActive,
      subscriptionExpiry = diaryMgr.auth.subscriptionExpiry;

    let renewButton = null,
      subscriptionExpiryPrefix = 'expires';

    subscriptionType += ' - ' + (subscriptionActive ? 'ACTIVE' : 'INACTIVE');

    if (!subscriptionActive) {
      title = (
        <span>
          <AttentionIcon /> {title}
        </span>
      );

      subscriptionExpiryPrefix = 'expired';

      renewButton = (
        <FetchPricingButton onLoaded={this._showRenewalScreen}>
          Renew subscription
        </FetchPricingButton>
      );
    }

    let desc = subscriptionActive 
      ? 'Your diary entries are backed up and synced.'
      : 'Your diary entries are NOT backed up or synced.';

    let descAttrs = {
      description: true,
      error: !subscriptionActive,
    };

    return (
      <div className="cloud-user">
        <div className="subscription">
          <span>{subscriptionType}</span>
          <span className={Classnames(descAttrs)}>{desc}</span>
          <span className="until">
            ({subscriptionExpiryPrefix} <DateFormat date={subscriptionExpiry} format="MMMM DD, YYYY" />)
          </span>
        </div>
        {renewButton}
        <RenewalOverlay 
          ref="renewal" 
          {...this.props} />
      </div>
    );
  },

});


module.exports = connectRedux([
  'loadScript'
])(Component);


