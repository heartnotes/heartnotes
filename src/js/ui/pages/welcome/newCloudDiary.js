import _ from 'lodash';
import React from 'react';

import Button from '../../components/button';
import SignUpForm from '../../components/welcome/signUpForm';
import Layout from './layout';
import { connectRedux, routing } from '../../helpers/decorators';




var Component = React.createClass({
  render: function() { 
    return (
      <Layout>
        <div className="new-cloud-diary">
          <SignUpForm onCreate={this._createNew}
            progressCheckVar={this.props.data.diary.signingUp} />
          <Button size="xs" onClick={this._goBack}>Back</Button>
        </div>
      </Layout>
    );
  },


  componentDidUpdate: function() {
    if (this.props.data.diary.diaryMgr) {
      this.props.router.push('/welcome/loadDiary');
    }
  },


  _createNew: function(id, password) {
    return this.props.actions.createDiary(
      'cloud', 
      id, 
      password
    );
  },


  _goBack: function() {
    this.props.router.push('/welcome');
  },

});



module.exports = connectRedux([
  'createDiary'
])(routing()(Component));



