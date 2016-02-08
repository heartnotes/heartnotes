import _ from 'lodash';
import Q from 'bluebird';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux } from '../../../helpers/decorators';
import AttentionIcon from '../../attentionIcon';
import EnableSyncOverlay from './enableSyncOverlay';
import Button from '../../button';



var Component = React.createClass({
  render: function() { 
    let enableButton = (
      <Button onClick={this._showEnableScreen}>
        Enable cloud sync
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
          showCancelButton={false}
          {...this.props} />
      </div>
    );
  },

  _showEnableScreen: function() {
    this.refs.enable.refs.wrappedInstance.show();
  },

});


module.exports = connectRedux()(Component);


