var React = require('react');

var Router = require('react-router');
var { Link } = Router;

var IconButton = require('./iconButton');



module.exports = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var items = [
      {
        icon: 'eject',
        action: this._closeDiary,
        desc: 'Close this diary',
      },
    ];

    var buttons = items.map(function(item) {
      return (
        <IconButton icon={item.icon} onClick={item.action} tooltip={item.desc} />
      );
    }, this);

    return (
      <div className="sub-menu">
        {buttons}
      </div>
    );
  },


  _closeDiary: function() {
    this.props.flux.getActions('user').closeDataFile();
  },
});
