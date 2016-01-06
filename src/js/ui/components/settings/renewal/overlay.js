var _ = require('lodash'),
  Q = require('bluebird'),
  React = require('react');

import Overlay from '../../overlay';
import ProgressButton from '../../progressButton';
import Currency from '../../currency';
import Loading from '../../loading';
import ErrorMessage from '../../errorMessage';
import PaymentForm from './paymentForm';



module.exports = React.createClass({
  render: function() {
    let pricing = _.get(this.props.data, 'app.fetchingPricing.result');

    let pricingItem = _.get(pricing, '0'),
      pricingItemRendered = null,
      paymentForm = <Loading />;

    if (pricingItem) {
      let features = _.map(pricingItem.features, (d, idx) => {
        return (
          <li key={idx}>{d}</li>
        )
      });

      pricingItemRendered = (
        <div className="pricing-item">
          <div className="title">{pricingItem.title}</div>
          <div className="features">
            <ul>
              {features}
            </ul>
          </div>
          <div className="price">
            <Currency value={pricingItem.price} currencyCode={pricingItem.currency} />
          </div>
        </div>
      );
    }

    let stripeInterface = this._getStripeInterface(),
      stripeLoadError = this._getStripeLoadError();

    if (stripeInterface) {
      paymentForm = (
        <PaymentForm 
          onSuccess={this._hide}
          pricing={pricingItem} />
      );
    } else if (stripeLoadError) {
      paymentForm = <ErrorMessage error={stripeLoadError} />;
    }

    return (
      <Overlay ref="overlay" showCancelButton={true}>
        <div className="renew-subscription-dialog">
          <p className="intro">
            By supporting us you enable us to make a better app for you :)
          </p>
          {pricingItemRendered}
          <div className="payment-form">
            {paymentForm}
          </div>
        </div>
      </Overlay>
    );
  },

  _getStripeInterface() {
    return _.get(this.props.data, 'app.scripts.stripe.object');
  },

  _getStripeLoadError() {
    return _.get(this.props.data, 'app.scripts.stripe.error');
  },

  _hide: function() {
    this.refs.overlay.hide();
  },

  show: function() {
    this.refs.overlay.show();

    if (!this._getStripeInterface()) {
      this.props.actions.loadScript('stripe', 'https://js.stripe.com/v2/', {
        global: 'Stripe'
      });
    }
  },

});
