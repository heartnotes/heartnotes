import _ from 'lodash';
import React from 'react';

import Button from '../../button';


module.exports = React.createClass({
  propTypes: {
    onComplete: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className="payment-thanks">
        <p>Thank you for your support!</p>
        <Button onClick={this.props.onComplete}>Ok</Button>
      </div>
    );
  },
});

