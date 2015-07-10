var React = require('react');

var Router = require('react-router');
var { Link } = Router;

var Icon = require('./icon');



module.exports = React.createClass({
  mixins: [ Router.State ],

  render: function() {
    var items = [
      {
        icon: 'plus',
        route: 'newEntry',
      },
      {
        icon: 'bars',
        route: 'entries',
      },
    ];

    var primaryLinks = items.map(function(item) {
      var activeClass = this.isActive(item.route) ? 'active' : '';

      return (
        <Link className={"btn " + activeClass} to={item.route}>
          <Icon name={item.icon} />
        </Link>
      );
    }, this);



    return (
      <div className="main-menu">
        {primaryLinks}
      </div>
    );
  },


});
