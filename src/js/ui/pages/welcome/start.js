var _ = require('lodash'),
  $ = require('jquery'),
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
      id: null,
      password: null,
    };
  },

  render: function() { 
    let { loggingIn } = this.props.data.diary;

    let id = this._getUsername();

    let buttonAttrs = {
      onClick: this._openDiary,
      animActive: !!loggingIn.inProgress,
      disabled: !_.get(this.state.password, 'length') || !_.get(id, 'length'),
    };

    return (
      <div className="start step">
        <div className="open-existing">
          <form onSubmit={this._openDiary}>
            <div className="field row">
              <input type="text"
                ref="id"
                onInput={this._setId} 
                value={id} 
                placeholder="Email address"
                tabIndex='1' />
            </div>
            <div className="field row">
              <PasswordInput 
                placeholder="Password"
                password={this.state.password} 
                onChange={this._setPassword} 
                tabIndex={1} />
            </div>
            <div className="action row">
              <OpenDiaryProgressPopup {...this.props}>
                <Button {...buttonAttrs}>Login</Button>
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
    let { lastAccessedDiary } = this.props.data.diary;

    return (null !== this.state.id ? this.state.id : lastAccessedDiary) || '';
  },


  _openDiary: function(e) {
    e.preventDefault();

    this.props.actions.openDiary(
      this._getUsername(),
      this.state.password
    )
      .then(() => {
        this.setState(this.getInitialState());

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


  _setId: function(e) {
    let id = $(e.currentTarget).val();

    this.setState({
      id: id,
    });
  },




});


module.exports = connectRedux([
  'chooseDiary',
  'openDiary'
])(Component);



