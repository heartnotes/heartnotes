import _ from 'lodash';
import React from 'react';

import ActionProgress from './actionProgress';
import Button from './button';


module.exports = React.createClass({
  propTypes: {
    checkVar: React.PropTypes.object.isRequired,
    defaultProgressMsg: React.PropTypes.string,
    progressProps: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      defaultProgressMsg: 'Processing...',
      progressProps: {},
    };
  },

  render: function() {
    let msg = null;

    let buttonAttrs = _.extend({}, this.props);

    if (_.get(this.props.checkVar, 'inProgress')) {
      let _msg = _.get(this.props.checkVar, 'progressMsg');

      if (!_.get((_msg || '').trim(), 'length')) {
        _msg = this.props.defaultProgressMsg;
      }

      msg = (
        <div>{_msg}</div>
      );

      buttonAttrs.animActive = true;
      buttonAttrs.disabled = true;
    } else {
      buttonAttrs.animActive = false;      
    }

    let err = _.get(this.props.checkVar, 'error');

    if (err) {
      msg = (
        <div className="error">{err + ''}</div>
      );
    }

    let progressProps = _.omit(this.props.progressProps, 'msg');

    return (
      <ActionProgress msg={msg} {...progressProps}>
        <Button {...buttonAttrs}>{this.props.children}</Button>
      </ActionProgress>
    );
  },

});




