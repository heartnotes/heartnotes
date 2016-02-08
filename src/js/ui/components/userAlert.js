import React from 'react';
import Classnames from 'classnames';

import Overlay from './overlay';
import Button from './button';


module.exports = React.createClass({
  propType: {
    msg: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  },

  render: function() {
    let { msg, type } = this.props;

    let content = null;

    let classes = {
      'mini-alert': true,
      'info': true,
      'on': 'mini' === type,
    };

    classes.off = !classes.on;

    return (
      <div className="user-alert">
        <div className={Classnames(classes)}>{msg}</div>
        <Overlay ref="dialog" showCancelButton={true}>
          <div className="dialog-alert">
            <div className="msg">{msg}</div>
            <div className="buttons">
              <Button onClick={this._onHideDialog}>Ok</Button>
            </div>
          </div>
        </Overlay>
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if ('dialog' === this.props.type && 'dialog' !== oldProps.type) {
      this.refs.dialog.show();
    }
  },


  _onHideDialog: function() {
    this.refs.dialog.hide();
  },

});


