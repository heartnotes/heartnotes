var _ = require('lodash'),
  React = require('react');


var Button = require('../../components/button'),
  IconButton = require("../../components/iconButton"),
  Popup = require("../../components/popup"),
  PasswordInput = require('../../components/passwordInput'),
  OpenDiaryProgressPopup = require('../../components/openDiaryProgressPopup');


import { connectRedux } from '../../helpers/decorators';



var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      username: null,
      password: null,
    };
  },

  render: function() { 
    let { opening } = this.props.data.diary;

    let username = this._getUsername();

    let buttonAttrs = {
      onClick: this._openDiary,
      animActive: !!opening.inProgress,
      disabled: !_.get(this.state.password, 'length') || !_.get(this.state.username, 'length'),
    };

    return (
      <div className="start step">
        <div className="open-existing">
          <div><label>Open diary</label></div>
          <form onSubmit={this._openDiary}>
            <div className="field row">
              <input type="text"
                ref="username"
                onInput={this._setUsername} 
                value={username} 
                placeholder="Email address"
                tabIndex={1} />
            </div>
            <div className="field row">
              <PasswordInput 
                placeholder="Password"
                password={this.state.password} 
                onChange={this._setPassword} 
                tabIndex={2} />
            </div>
            <div className="action row">
              <OpenDiaryProgressPopup {...this.props}>
                <Button {...buttonAttrs}>Open</Button>
              </OpenDiaryProgressPopup>
            </div>
          </form>
        </div>
        <div className="create-new">
          <Button onClick={this._createNew}>Create new diary</Button>
        </div>
      </div>
    );
  },


  _getUsername: function() {
    let { lastOpenedDiary } = this.props.data.diary;

    return this.state.username || _.get(lastOpenedDiary, 'username', '');
  },


  _openDiary: function(e) {
    e.preventDefault();

    this.props.actions.openDiary(
      this._getUsername(),
      this.state.password
    )
      .then(() => {
        this.props.showStep('loadDiary');
      });
  },


  _createNew: function() {
    this.props.showStep('newDiary');
  },



  _setPassword: function(p) {
    this.setState({
      password: p,
    });
  },


  _setUsername: function(e) {
    let name = $(e.currentTarget).val();

    this.setState({
      username: name,
    });
  },




});


module.exports = connectRedux([
  'chooseDiary',
  'openDiary'
])(Component);



