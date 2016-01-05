import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import SelectBox from 'react-select-box';

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
            value={this.state.cardNumber} 
            onChange={this._setCardNumber}
            placeholder="Credit card number" 
            tabIndex={1} />
        </div>
        <div className="field row">
          <SelectBox 
            label="Exp. month"
            className='exp-month'
            onChange={this._setExpMonth}
            value={this.state.expMonth}>
              {monthOptions}
          </SelectBox>
          <SelectBox 
            label="Exp. year"
            className='exp-year'
            onChange={this._setExpYear}
            value={this.state.expYear}>
              {yearOptions}
          </SelectBox>
        </div>
        <div className="action row">
          <ProgressButton {...buttonAttrs}>Pay</ProgressButton>
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

