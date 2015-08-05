var _ = require('lodash'),
  React = require('react');

var Detect = require('../../../utils/detect'),
  StringUtils = require('../../../utils/string'),
  Button = require('../../components/button'),
  IconButton = require("../../components/iconButton"),
  Popup = require("../../components/popup"),
  PasswordInput = require('../../components/passwordInput'),
  OpenDiaryProgressPopup = require('../../components/openDiaryProgressPopup');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  getInitialState: function() {
    return {
      password: null,
    };
  },

  render: function() { 
    var content = null;

    if (this.props.lastAccessedDiaryDetails) {
      var lastDiaryName = StringUtils.formatDiaryDetails(
        this.props.lastAccessedDiaryDetails
      );

      var buttonAttrs = {
        onClick: this._checkPassword,
        animActive: !!this.props.nowOpeningDiary,
      };

      if (!this.state.password || !this.state.password.length) {
        buttonAttrs.disabled = true;
      }

      content = (
        <div className="open-existing">
          <p>
            <label>Current:</label>
            <span>{lastDiaryName}</span>
            {this._buildChooseAnotherDiaryButton()}
          </p>
          <form onSubmit={this._checkPassword}>
            <div className="field row">
              <PasswordInput password={this.state.password} onChange={this._setPassword} />
            </div>
            <div className="action row">
              <OpenDiaryProgressPopup {...this.props}>
                <Button {...buttonAttrs}>Open</Button>
              </OpenDiaryProgressPopup>
            </div>
          </form>
        </div>
      );
    }


    content = (
      <div>
        {content}
        <div className="create-new">
          <Button onClick={this._createNew}>Create new diary</Button>
        </div>
      </div>
    );

    return (
      <div className="start step">
        {content}
      </div>
    );
  },



  componentDidUpdate: function() {
    if (!this.props.isActive) {
      return;
    }

    var password = this.state.password;

    if (password && password.length && this.props.derivedKeys) {
      this.props.showStep('loadDiary');
    }
  },


  _buildChooseAnotherDiaryButton: function() {
    if (Detect.isElectronApp()) {
      let popupMsg = this.props.chooseDataFileError
        ? (<div>{'' + this.props.chooseDataFileError}</div>)
        : null;

      return (
        <span className="choose-diary">
          <Popup 
              msg={popupMsg} 
              show={!!this.props.chooseDataFileError}>
            <IconButton 
              ref="chooseDiaryButton"
              icon="folder-open"
              onClick={this._chooseDiary}
              tooltip="Choose a different diary" />
          </Popup>
        </span>
      );
    } else {
      return null;
    }
  },


  _checkPassword: function(e) {
    e.preventDefault();

    this.props.flux.getActions('user')
      .openDataFile(
        _.get(this.props.lastAccessedDiaryDetails, 'name'),
        this.state.password
      );
  },


  _setPassword: function(p) {
    this.setState({
      password: p,
    });
  },


  _createNew: function() {
    this.props.showStep('newDiary');
  },


  _chooseDiary: function() {    
    this.props.flux.getActions('user').chooseDataFile();
  },

});

