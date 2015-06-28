var React = require('react');

var Button = require('../../components/button');


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
      createActive: false
    };
  },

  render: function() { 
    var content = null;

    if (this.props.lastDataFile) {
      var lastDataFile = this.props.lastDataFile;

      content = (
        <div>
          <p>Diary: {lastDataFile.name}</p>
          <Button onClick={this._openExisting}>Open</Button>
        </div>
      );
    }

    content = (
      <div>
        {content}
        <Button animActive={this.state.createActive} 
          onClick={this._createNew}>New diary</Button>
      </div>
    );

    return (
      <div className="start step">
        {content}
      </div>
    );
  },


  _createNew: function() {
    this.setState({
      createActive: true
    });
    // this.props.showStep('newDiary');
  },


  _openExisting: function() {
    this.props.showStep('existingDiary');
  }

});

