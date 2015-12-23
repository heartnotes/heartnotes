import _ from 'lodash';
import React from 'react';

import ActionProgress from './actionProgress';


module.exports = React.createClass({

  render: function() {
    let msg = null;

    let { diary } = this.props.data;

    let { loggingIn } = diary;

    if (loggingIn.inProgress) {
      msg = (
        <div>Checking password.....</div>
      );
    }

    if (diary.loggingIn.error) {
      let errMsg = _.get(loggingIn.error, 'message', 'Sorry, password incorrect');

      msg = (
        <div className="error">{errMsg}</div>
      );
    }

    return (
      <ActionProgress msg={msg}>
        {this.props.children}
      </ActionProgress>
    );
  },

});




