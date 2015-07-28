var ipc = require('ipc');

var React = require('react');

var Detect = require('../../../utils/detect'),
  Button = require('../../components/button'),
  IconButton = require("../../components/iconButton"),
  PasswordInput = require('../../components/passwordInput'),
  PasswordCheckProgressPopup = require('../../components/passwordCheckProgressPopup');


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

    if (this.props.lastDataFileName) {
      var lastDataFileName = this.props.lastDataFileName;

      var buttonAttrs = {
        onClick: this._checkPassword,
        animActive: !!this.props.nowDerivingKeys,
      };

      if (!this.state.password || !this.state.password.length) {
        buttonAttrs.disabled = true;
      }

      content = (
        <div className="open-existing">
          <p>
            <label>Last opened:</label>
            <span>{lastDataFileName}</span>
            {this._buildChooseAnotherDiaryButton()}
          </p>
          <form onSubmit={this._checkPassword}>
            <div className="field row">
              <PasswordInput password={this.state.password} onChange={this._setPassword} />
            </div>
            <div className="action row">
              <PasswordCheckProgressPopup {...this.props}>
                <Button {...buttonAttrs}>Open</Button>
              </PasswordCheckProgressPopup>
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
      return (
        <span className="choose-diary">
          <IconButton 
            ref="chooseDiaryButton"
            icon="folder-open"
            onClick={this._chooseDiary}
            tooltip="Choose a different diary" />
        </span>
      );
    } else {
      return null;
    }
  },


  _checkPassword: function(e) {
    e.preventDefault();

    this.props.flux.getActions('user')
      .openDataFile(this.props.lastDataFile.name, this.state.password);
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
    console.log(ipc.sendSync('synchronous-message', 'chooseFile'));
  },

});

