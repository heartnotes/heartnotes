import _ from 'lodash';
import Q from 'bluebird';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux } from '../../../helpers/decorators';
import AttentionIcon from '../../attentionIcon';
import Button from '../../button';
import Loading from '../../loading';
import EnableSyncOverlay from './enableSyncOverlay';




var Component = React.createClass({
  render: function() { 
    let enableButton = (
      <Button onClick={this._showEnableScreen}>
        Enable Cloud Sync
      </Button>
    );

    return (
      <div className="local-user">
        <div className="subscription">
          <span>Cloud sync not enabled <AttentionIcon /></span>
          <span className="description">
            Your diary entries are NOT backed up or synced.
          </span>
        </div>
        {enableButton}
        <EnableSyncOverlay 
          ref="enable" 
          {...this.props} />
      </div>
    );
  },

});


module.exports = connectRedux()(Component);


