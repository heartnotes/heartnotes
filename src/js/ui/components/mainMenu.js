var React = require('react');

var Router = require('react-router');
var { Navigation } = Router;

var IconButton = require('./iconButton');



module.exports = React.createClass({
  mixins: [ Navigation ],

  render: function() {
    var items = [
      {
        icon: 'plus',
        route: 'newEntry',
        desc: 'Add entry',
      },
      {
        icon: 'th-list',
        route: 'entries',
        desc: 'View timeline',
      },
    ];

    var primaryLinks = items.map(function(item) {
      return (
        <IconButton icon={item.icon} onClick={this._goRoute(item)} tooltip={item.desc} />
      );
    }, this);


    return (
      <div className="main-menu">
        {primaryLinks}
      </div>
    );
  },


  _goRoute: function(item) {
    var self = this;

    return function() {
      self.transitionTo(item.route);
    };
  },

});
