import _ from 'lodash';
import React from 'react';

import Button from '../../button';
import ProgressButton from '../../progressButton';
import IconButton from "../../iconButton";
import Popup from "../../popup";
import PasswordInput from '../../passwordInput';
import EmailInput from '../../emailInput';
import { connectRedux, routing } from '../../../helpers/decorators';
import * as StringUtils from '../../../../utils/string';


var Component = React.createClass({
  getInitialState: function() {
    return {
      password: null,
    };
  },

  render: function() { 
    let { loggingIn } = this.props.data.diary;

    let loginForm = null;

    let haveExistingDiary = !!this.props.data.diary.localDiaryId;

    if (haveExistingDiary) {
      let buttonAttrs = {
        defaultProgressMsg: 'Opening...',
        checkVar: loggingIn,
        onClick: this._openDiary,
        disabled: !_.get(this.state.password, 'length'),
      };

      loginForm = (
        <div className="open-existing">
          <form onSubmit={this._openDiary}>
            <div className="field row">
              <PasswordInput 
                placeholder="Password"
                password={this.state.password} 
                onChange={this._setPassword} 
                tabIndex={1} 
                disabled={loggingIn.inProgress} />
            </div>
            <div className="action row">
              <ProgressButton {...buttonAttrs}>Open</ProgressButton>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="start-local">
        {loginForm}
        <div className="create-new">
          <Button onClick={this._createNew}>Create new diary</Button>
        </div>
      </div>
    );
  },


  _openDiary: function(e) {
    e.preventDefault();

    this.props.actions.openDiary(
      'local', 
      this.props.data.diary.localDiaryId, 
      this.state.password
    )
      .then(() => {
        this.setState(this.getInitialState());

        this.props.router.push('/welcome/loadDiary');
      });
  },


  _createNew: function() {
    this.props.router.push('/welcome/newLocalDiary');
  },


  _setPassword: function(p) {
    this.setState({
      password: p,
    });
  },


});


module.exports = connectRedux([
  'openDiary',
])(routing()(Component));



