import _ from 'lodash';
import React from 'react';

import { connectRedux } from '../../../helpers/decorators';
import ProgressButton from '../../progressButton';




var Component = React.createClass({
  propTypes: {
    onLoaded: React.PropTypes.func.isRequired,
  },

  render: function() { 
    return (
      <ProgressButton 
        checkVar={this.props.data.app.fetchingPricing}
        defaultProgressMsg="Fetching pricing..."
        progressProps={{centered: false}}
        onClick={this._load}>
          {this.props.children}
      </ProgressButton>
    );
  },


  _load: function() {
    this.props.actions.getPricing()
      .then(this.props.onLoaded);
  }
});


module.exports = connectRedux([
  'getPricing',
])(Component);


