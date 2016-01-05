import React from 'react';

import { connectRedux } from '../../../helpers/decorators';
import ProgressButton from '../../progressButton';


var Component = React.createClass({
  propTypes: {
    pricing: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      inProgress: false,
      cardNumber: null,
      expMonth: null,
      expYear: null,
    };
  },

  render() {
    let buttonAttrs = {
      defaultProgressMsg: 'Verifying...',
      checkVar: this.props.data.app.paying,
      onClick: this._onSubmit,
      disabled: !_.get(this.state.cardNumber, 'length') 
        || !_.get(this.state.expMonth, 'length')
        || !_.get(this.state.expYear, 'length'),
    };

    return (
      <form className="payment-form">
        <div className="field row">
          <input 
            value={this.state.cardNumber} 
            placeholder="Card number" 
            tabIndex={1} />
        </div>
        <div className="field row">
          <input 
            value={this.state.expMonth} 
            placeholder="Expiry month" 
            tabIndex={2} />
          <input 
            value={this.state.expYear} 
            placeholder="Expiry year" 
            tabIndex={3} />
        </div>
        <div className="action row">
          <ProgressButton {...buttonAttrs}>Login</ProgressButton>
        </div>
      </form>
    );
  },


  _stripe() {
    return _.get(this.props.data, 'app.scripts.stripe');
  },


  _onSubmit: function() {
    let Stripe = this._stripe();

    this.props.actions.pay(pricing, token)
      .catch((err) => {
        if (!this.isMounted()) {
          return;
        }

        this.setState({
          error: err,
        });
      });
  },

});


module.exports = connectRedux([
  'verifyPayment'
])(Component);

