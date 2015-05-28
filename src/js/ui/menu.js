var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;


var Icon = require('./components/icon');


module.exports = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var self = this;

    var items = [
      {
        icon: 'plus',
        route: 'newEntry',
      },
      {
        icon: 'bars',
        route: 'mainView',
      },
      {
        icon: 'wrench',
        route: 'settings'
      }
    ];

    var buttons = items.map(function(item) {
      var activeClass = self.isActive(item.route) ? 'active' : '';

      return (
        <Link className={"btn " + activeClass} to={item.route}>
          <Icon name={item.icon} />
        </Link>
      );
    });

    return (
      <div className="buttons">{buttons}</div>
    );
  },
});
