var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;


module.exports = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var self = this;

    var items = [
      {
        icon: 'fa-plus',
        route: 'newEntry',
      },
      {
        icon: 'fa-bars',
        route: 'timeline',
      },
      {
        icon: 'fa-calendar',
        route: 'calendar',
      },
      {
        icon: 'fa-wrench',
        route: 'settings'
      }
    ];

    var buttons = items.map(function(item) {
      var activeClass = self.isActive(item.route) ? 'active' : '';

      return (
        <Link className={"btn " + activeClass} to={item.route}>
          <i className={"fa " + item.icon} />
        </Link>
      );
    });

    return (
      <div className="buttons">{buttons}</div>
    );
  },
});
