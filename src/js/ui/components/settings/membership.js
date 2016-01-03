var _ = require('lodash'),
  React = require('react');

import { connectRedux } from '../../helpers/decorators';
import DateFormat from '../date';
import Button from '../button';
import AttentionIcon from '../attentionIcon';


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
        <Button 
          onClick={this._showRenewalScreen}>
            Renew subscription
        </Button>
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
      </div>
    );
  },


  _showRenewalScreen: function() {

  }

});


module.exports = connectRedux()(Component);


