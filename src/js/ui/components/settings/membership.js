import _ from 'lodash';
import Q from 'bluebird';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux } from '../../helpers/decorators';
import DateFormat from '../date';
import Button from '../button';
import AttentionIcon from '../attentionIcon';
import RenewalOverlay from './renewal/overlay';
import ProgressButton from '../progressButton';
import Loading from '../loading';







var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let subscriptionType = diaryMgr.auth.subscriptionType,
      subscriptionActive = diaryMgr.auth.subscriptionActive,
      subscriptionExpiry = diaryMgr.auth.subscriptionExpiry;

    let renewButton = null,
      title = 'Cloud sync',
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
        <ProgressButton 
          checkVar={this.props.data.app.fetchingPricing}
          defaultProgressMsg="Fetching pricing..."
          progressProps={{centered: false}}
          onClick={this._showRenewalScreen}>
            Renew subscription
        </ProgressButton>
      );
    }

    let desc = subscriptionActive 
      ? 'Your diary entries are backed up and synced.'
      : 'Your diary entries are NOT currently backed up and synced.';

    let descAttrs = {
      description: true,
      error: !subscriptionActive,
    };

    return (
      <div className="membership">
        <h2>{title}</h2>
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

  _showRenewalScreen: function() {
    this.props.actions.getPricing()
      .then(() => {
        this.refs.renewal.show();
      });
  },

});


module.exports = connectRedux([
  'getPricing',
  'loadScript'
])(Component);


