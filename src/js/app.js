var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;

var Timeline = require('./ui/pages/timeline');

var App = React.createClass({
  render: function() {
    return (
      <RouteHandler {...this.props}/>
    );
  }
});


var routes = (
  <Route handler={App}>
    <DefaultRoute name="timeline" handler={Timeline} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});


