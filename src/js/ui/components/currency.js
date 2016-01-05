import React from 'react';
import Classnames from 'classnames';



module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    currencyCode: React.PropTypes.string.isRequired,
    numDecimals: React.PropTypes.number,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      numDecimals: undefined,
      className: ""
    }
  },

  render: function() {
    let { value, numDecimals, currencyCode, className } = this.props;

    // if no decimals specified then be smart
    if (undefined === numDecimals) {
      // try not show decimals unless absolutely needed, in which case show 2
      numDecimals = (0 < value - parseInt(value)) ? 2 : 0;
    }

    value = value.toLocaleString('en-US', {
      style: 'currency',
      currency: currencyCode,
      useGrouping: true,
      minimumFractionDigits: numDecimals,
      maximumFractionDigits: numDecimals,
    });

    let classes = Classnames({
      currency: true,
    }, className);

    return (
      <span className={classes}>{value}</span>
    );
  },
});
