var React = require('react');


var Icon = require('../../components/icon'),
  Button = require('../../components/button');

import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  render: function() { 
    var progressMsg = "Loading diary...";

    var loadingError = null;
    if (this.props.data.diary.loadingEntries.error) {
      progressMsg += 'failed!';

      var msg = (
        <span>{this.props.data.diary.loadingEntries.error.toString()}</span>
      );

      loadingError = (
        <div>
          <div className="error">
            <Icon name="exclamation-triangle" />
            {msg}
          </div>
          <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
        </div>
      );
    }

    return (
      <div className="load-diary step">
        <p>{progressMsg}</p>
        {loadingError}
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if (!this.props.isActive) {
      return;
    }

    // if just became active then kick-off entry loading
    if (!oldProps.isActive) {
      this.props.actions.loadEntries();
    }
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['loadEntries'])(Component);

