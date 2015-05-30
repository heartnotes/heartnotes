var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler } = Router;

// Flux
import FluxComponent from 'flummox/component';
import FluxManager from './store/manager';


var Layout = require('./ui/layout');
// var MainView = require('./ui/pages/mainView');
var NewEntry = require('./ui/pages/newEntry');




var App = React.createClass({
  getInitialState: function() {
    return {
      flux: new FluxManager()
    };
  },

  render: function() {
    return (
      <FluxComponent flux={this.state.flux}>
        <Layout {...this.props}>
          <RouteHandler {...this.props}/>
        </Layout>
      </FluxComponent>
    );
  }
});


    // <DefaultRoute name="mainView" handler={MainView} />

var routes = (
  <Route handler={App}>
    <Route name="newEntry" handler={NewEntry} />
    <Route name="settings" handler={NewEntry} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 

