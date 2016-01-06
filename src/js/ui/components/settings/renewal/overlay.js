var _ = require('lodash'),
  Q = require('bluebird'),
  React = require('react');

import Overlay from '../../overlay';
import ProgressButton from '../../progressButton';
import Button from '../../button';
import Currency from '../../currency';
import Loading from '../../loading';
import ErrorMessage from '../../errorMessage';
import StepSlider from '../../stepSlider';
import PaymentForm from './paymentForm';
import ThankYou from './thankYou';


const STEPS = [
  {
    id: 'payment',
    Component: PaymentForm,
  },
  {
    id: 'thanks',
    Component: ThankYou,
  },
];



module.exports = React.createClass({
  render: function() {
    let pricing = _.get(this.props.data, 'app.fetchingPricing.result');

    let pricingItem = _.get(pricing, '0');

    let pricingItemRendered = this._renderPricingItem(pricingItem);

    let paymentProcess = <Loading />;

    let stripeInterface = this._getStripeInterface(),
      stripeLoadError = this._getStripeLoadError();

    if (stripeInterface) {
      paymentProcess = (
        <StepSlider
          defaultStep="payment"
          steps={STEPS}
          pricing={pricingItem}
          onComplete={this._hide} />
      );
    } else if (stripeLoadError) {
      paymentProcess = (
        <ErrorMessage error={stripeLoadError} />
      );
    }

    return (
      <Overlay ref="overlay" showCancelButton={true}>
        <div className="renew-subscription-dialog">
          <p className="intro">
            By supporting us you enable us to make a better app for you :)
          </p>
          {pricingItemRendered}
          {paymentProcess}
        </div>
      </Overlay>
    );
  },



  _renderPricingItem: function(pricingItem) {
    if (!pricingItem) {
      return null;
    }

    let features = _.map(pricingItem.features, (d, idx) => {
      return (
        <li key={idx}>{d}</li>
      )
    });

    return (
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
