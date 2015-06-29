var React = require('react');

var Button = require('../../components/button'),
  PasswordInput = require('../../components/passwordInput'),
  DerivationProgress = require('../../components/derivationProgress');



module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      showStep: null,
    };
  },

  getInitialState: function() {
    return {
      password: null
    };
  },

  render: function() { 
    var content = null;

    if (this.props.lastDataFile) {
      var lastDataFile = this.props.lastDataFile;

      var buttonAttrs = {};
      if (!this.state.password || !this.state.password.length) {
        buttonAttrs.disabled = true;
      }

      content = (
        <div className="open-existing">
          <p><label>Diary:</label><span>{lastDataFile.name}</span></p>
          <form>
            <div className="fields">
              <PasswordInput setPassword={this._setPassword} />
              <Button onClick={this._checkPassword} active={this.props.nowDerivingKeys}>Open</Button>
            </div>
            <DerivationProgress {...this.props} />
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
    var password = this.state.password;

    if (password && password.length && this.props.derivedKeys) {
      this.props.showStep('loadDiary');
    }
  },



  _setPassword: function(p) {
    this.setState({
      password: p
    });
  },


  _createNew: function() {
    this.props.showStep('newDiary');
  },

});

