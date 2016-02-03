var _ = require('lodash'),
  React = require('react');


var Button = require('../../components/button'),
  ProgressButton = require('../../components/progressButton'),
  IconButton = require("../../components/iconButton"),
  Popup = require("../../components/popup"),
  PasswordInput = require('../../components/passwordInput'),
  EmailInput = require('../../components/emailInput');


import Layout from './layout';
import { connectRedux, routing } from '../../helpers/decorators';



var Component = React.createClass({
  getInitialState: function() {
    return {
      id: null,
      password: null,
    };
  },

  render: function() { 
    let { loggingIn } = this.props.data.diary;

    let id = this._getUsername();

    let buttonAttrs = {
      defaultProgressMsg: 'Logging in...',
      checkVar: loggingIn,
      onClick: this._openDiary,
      disabled: !_.get(this.state.password, 'length') || !_.get(id, 'length'),
    };

    return (
      <Layout>
        <div className="start step">
          <div className="open-existing">
            <form onSubmit={this._openDiary}>
              <div className="field row">
                <EmailInput 
                  email={id}
                  onChange={this._setId} 
                  tabIndex={1}
                  disabled={loggingIn.inProgress} />
              </div>
              <div className="field row">
                <PasswordInput 
                  placeholder="Password"
                  password={this.state.password} 
                  onChange={this._setPassword} 
                  tabIndex={1} 
                  disabled={loggingIn.inProgress} />
              </div>
              <div className="action row">
                <ProgressButton {...buttonAttrs}>Login</ProgressButton>
              </div>
            </form>
          </div>
          <div className="create-new">
            <Button onClick={this._createNew}>Create new diary</Button>
          </div>
        </div>
      </Layout>
    );
  },


  _getUsername: function() {
    let { lastAccessedDiary } = this.props.data.diary;

    return ((null !== this.state.id) ? this.state.id : lastAccessedDiary) || '';
  },


  _openDiary: function(e) {
    e.preventDefault();

    this.props.actions.openDiary(
      this._getUsername(),
      this.state.password
    )
      .then(() => {
        this.setState(this.getInitialState());

        this.props.history.navigate('/welcome/loadDiary');
      });
  },


  _createNew: function() {
    this.props.history.navigate('/welcome/newDiary');
  },


  _setPassword: function(p) {
    this.setState({
      password: p,
    });
  },


  _setId: function(email) {
    this.setState({
      id: email,
    });
  },




});


module.exports = connectRedux([
  'chooseDiary',
  'openDiary'
])(routing()(Component));



