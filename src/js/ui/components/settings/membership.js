var _ = require('lodash'),
  Q = require('bluebird'),
  React = require('react');

import { connectRedux } from '../../helpers/decorators';
import DateFormat from '../date';
import Button from '../button';
import AttentionIcon from '../attentionIcon';
import Overlay from '../overlay';
import ProgressButton from '../progressButton';


var RenewalOverlay = React.createClass({
  render: function() {
    let { pricing } = this.props;

    return (
      <Overlay ref="overlay" showCancelButton={true}>
        <h2>Setup subscription</h2>
      </Overlay>
    );
  },

  show: function() {
    this.refs.overlay.show();
  },

});




var Component = React.createClass({
  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let subscriptionType = diaryMgr.auth.subscriptionType,
      subscriptionActive = diaryMgr.auth.subscriptionActive,
      subscriptionExpiry = diaryMgr.auth.subscriptionExpiry;

    let renewButton = null,
      title = 'Membership',
      subscriptionExpiryPrefix = 'until';

    if (!subscriptionActive) {
      title = (
        <span>
          <AttentionIcon /> {title} [INACTIVE]
        </span>
      );

      subscriptionExpiryPrefix = 'expired';

      renewButton = (
        <ProgressButton 
          checkVar={this.props.data.app.fetchingPricing}
          defaultProgressMsg="Fetching pricing..."
          onClick={this._showRenewalScreen}>
            Renew subscription
        </ProgressButton>
      );
    }

    let pricing = _.get(this.props.data, 'app.fetchingPricing.result');

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
        <RenewalOverlay ref="renewal" pricing={pricing} />
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
  'getPricing'
])(Component);


