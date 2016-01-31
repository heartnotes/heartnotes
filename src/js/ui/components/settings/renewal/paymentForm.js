import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import SelectBox from 'react-select-box';

import { connectRedux } from '../../../helpers/decorators';
import ProgressButton from '../../progressButton';
import ExternalLink from '../../externalLink';


var Component = React.createClass({
  propTypes: {
    pricing: React.PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      cardNumber: null,
      expMonth: null,
      expYear: null,
      cvc: null,
    };
  },

  render() {
    let buttonAttrs = {
      defaultProgressMsg: 'Verifying...',
      checkVar: this.props.data.app.paying,
      onClick: this._onSubmit,
      disabled: !_.get(this.state.cardNumber, 'length') 
        || !_.get(this.state.expMonth, 'length')
        || !_.get(this.state.expYear, 'length')
        || !_.get(this.state.cvc, 'length'),
    };

    // months
    let monthOptions = [],
      currentMonth = moment('2015-01-01');

    _.times(12, () => {
      let month = currentMonth.format('MM'),
        monthLarge = currentMonth.format('MMM');

      monthOptions.push(
        <option key={month} value={month}>{monthLarge}</option>
      );

      currentMonth = currentMonth.add(1, 'months');
    });

    // years
    let yearOptions = [],
      currentYear = moment('2015-01-01');

    _.times(12, () => {
      let year = currentYear.format('YYYY');

      yearOptions.push(
        <option key={year} value={year}>{year}</option>
      );

      currentYear = currentYear.add(1, 'years');
    });

    return (
      <form className="payment-form">
        <div className="field row">
          <input 
            type="text"
            className="card-number"
            value={this.state.cardNumber} 
            onChange={this._setCardNumber}
            placeholder="Credit card number" 
            tabIndex={1} />
        </div>
        <div className="field row">
          <div className="expires">
            <label>Expires:</label>
            <SelectBox 
              label="Month"
              className='exp-month'
              onChange={this._setExpMonth}
              value={this.state.expMonth}>
                {monthOptions}
            </SelectBox>
            <SelectBox 
              label="Year"
              className='exp-year'
              onChange={this._setExpYear}
              value={this.state.expYear}>
                {yearOptions}
            </SelectBox>
          </div>
          <div className="cvc">
            <label><abbr title="Card Verification Code">CVC</abbr>:</label>
            <input 
              type="text"
              className="cvc"
              value={this.state.cvc} 
              onChange={this._setCvc}
              placeholder="CVC" 
              tabIndex={2} />
          </div>
        </div>
        <div className="action row">
          <ProgressButton {...buttonAttrs}>Pay</ProgressButton>
        </div>
        <div className="powered-by-stripe">
          Powered by <ExternalLink href="https://stripe.com">Stripe</ExternalLink>
        </div>
      </form>
    );
  },


  _setCvc: function(e) {
    this.setState({
      cvc: $(e.currentTarget).val(),
    });
  },


  _setCardNumber: function(e) {
    this.setState({
      cardNumber: $(e.currentTarget).val(),
    });
  },

  _setExpMonth: function(val) {
    this.setState({
      expMonth: val,
    });
  },

  _setExpYear: function(val) {
    this.setState({
      expYear: val,
    });
  },

  _stripe() {
    return _.get(this.props.data, 'app.scripts.stripe');
  },


  _onSubmit: function() {
    let Stripe = this._stripe();

    this.props.actions.pay(this.props.pricing, this.state)
      .then(() => {
        if (!this.isMounted()) {
          return;
        }

        this.props.showStep('thanks');
      });
  },

});


module.exports = connectRedux([
  'pay'
])(Component);

