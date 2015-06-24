var React = require('react');


module.exports = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      showStep: null,
    };
  },

  render: function() { 
    var content = null;

    if (this.props.lastDataFile) {
      var lastDataFile = this.props.lastDataFile;

      content = (
        <div>
          <p>Diary: {lastDataFile.name}</p>
          <button onClick={this._openExisting}>Open</button>
        </div>
      );
    }

    content = (
      <div>
        {content}
        <button onClick={this._createNew}>Create new diary</button>
      </div>
    );

    return (
      <div className="start step">
        {content}
      </div>
    );
  },


  _createNew: function() {
    this.props.showStep('newDiary');
  },


  _openExisting: function() {
    this.props.showStep('existingDiary');
  }

});

