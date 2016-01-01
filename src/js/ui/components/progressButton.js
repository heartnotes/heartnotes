import _ from 'lodash';
import React from 'react';

import ActionProgress from './actionProgress';
import Button from './button';


module.exports = React.createClass({
  propTypes: {
    checkVar: React.PropTypes.object.isRequired,
    defaultProgressMsg: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      defaultProgressMsg: 'Processing...',
    };
  },

  render: function() {
    let msg = null;

    let buttonAttrs = _.extend({}, this.props);

    if (_.get(this.props.checkVar, 'inProgress')) {
      msg = (
        <div>{this.props.defaultProgressMsg}</div>
      );

      buttonAttrs.animActive = true;
    } else {
      buttonAttrs.animActive = false;      
    }

    let err = _.get(this.props.checkVar, 'error');

    if (err) {
      msg = (
        <div className="error">{err + ''}</div>
      );
    }

    return (
      <ActionProgress msg={msg}>
        <Button {...buttonAttrs}>{this.props.children}</Button>
      </ActionProgress>
    );
  },

});




