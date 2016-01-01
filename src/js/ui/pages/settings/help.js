import $ from 'jquery';
import _ from 'lodash';
import React from 'react';

import Layout from './layout';
import TopMenu from '../../components/settings/topMenu';
import { connectRedux } from '../../helpers/decorators';
import ProgressButton from '../../components/progressButton';


var Component = React.createClass({
  getInitialState: function() {
    return {
      msg: null,
    };
  },

  render: function() { 
    let { diaryMgr } = this.props.data.diary;

    let buttonAttrs = {
      defaultProgressMsg: 'Sending...',
      progessVarKey: this.props.data.app.sendingFeedback,
      disabled: !_.get(this.state.msg, 'length')
      onClick: this._send,
    };

    return (
      <Layout tab="help" {...this.props}>
        <h2>Give us feedback</h2> 
        <textarea 
          onChange={this._onChange} 
          rows="10" 
          placeholder="Tell us what you like or don't like..." />
        <ProgressButton {...buttonAttrs}>Send</ProgressButton>
      </Layout>
    );
  },

  _onChange: function(e) {
    let msg = $(e.currentTarget).val();

    this.setState({
      msg: msg,
    })
  },


  _send: function() {
    if (this.state.msg) {
      this.props.actions.sendFeedback(this.state.msg);
    }
  }
});



module.exports = connectRedux([
  'sendFeedback'
])(Component);

