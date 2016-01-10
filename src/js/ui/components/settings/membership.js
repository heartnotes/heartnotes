var _ = require('lodash'),
  Q = require('bluebird'),
  React = require('react');

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
      title = 'Cloud subscription',
      subscriptionExpiryPrefix = 'until';

    if (!subscriptionActive) {
      title = (
        <span>
          <AttentionIcon /> {title} INACTIVE
        </span>
      );

      subscriptionExpiryPrefix = 'expired';

      renewButton = (
        <div>
          <p className="warning">Your diary entries are currently not being backed up or synced.</p>
          <ProgressButton 
            checkVar={this.props.data.app.fetchingPricing}
            defaultProgressMsg="Fetching pricing..."
            progressProps={{centered: false}}
            onClick={this._showRenewalScreen}>
              Renew subscription
          </ProgressButton>
        </div>
      );
    }

    return (
      <div className="membership">
        <h2>{title}</h2>
        <div className="subscription">
          <span>{subscriptionType}</span>
          <span>
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


