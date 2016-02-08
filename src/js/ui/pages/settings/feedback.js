import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import { connectRedux, routing } from '../../helpers/decorators';
import ProgressButton from '../../components/progressButton';
import ExternalLink from '../../components/externalLink';


var Component = React.createClass({
  getInitialState: function() {
    return {
      msg: null,
    };
  },

  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let content = null;

    if ( diaryMgr.auth.isLocalType ) {
      content = (
        <p>
          Please <Link to="/settings">setup cloud sync</Link> if you wish to enable the feedback feature.
        </p>
      );
    } else {
      let { msg } = this.state;

      let buttonAttrs = {
        defaultProgressMsg: 'Sending...',
        progressProps: {
          centered: false
        },
        checkVar: this.props.data.app.sendingFeedback,
        disabled: !_.get(msg, 'length'),
        onClick: this._send,
      };

      content = (
        <div>
          <textarea 
            value={msg}
            onChange={this._onChange} 
            rows="10" 
            placeholder="Tell us what you like or don't like..." />
          <ProgressButton {...buttonAttrs}>Send</ProgressButton>
        </div>
      );
    }

    return (
      <Layout tab="feedback" {...this.props}>
        <h2>Give us feedback</h2> 
        {content}
      </Layout>
    );
  },

  _onChange: function(e) {
    let msg = $(e.currentTarget).val();

    this.setState({
      msg: msg,
    });
  },


  _send: function() {
    let msg = this.state.msg;

    if (_.get(msg, 'length')) {
      this.props.actions.sendFeedback(msg)
        .then(() => {
          if (!this.isMounted()) {
            return;
          }

          this.setState({
            msg: '',
          });
        });
    }
  },

});



module.exports = connectRedux([
  'sendFeedback'
])(routing()(Component));

