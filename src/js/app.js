var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler } = Router;


// Flux
import { FluxComponent } from 'flummox';
import { FluxManager } from './store/manager';


class App extends React.Component {
  constructor() {
    super()

    this.flux = new FluxManager();
  }

  render() {
    return (
      <FluxComponent flux={this.flux}>
        <Layout {...this.props}>
          <RouteHandler {...this.props}/>
        </Layout>
      </FluxComponent>
    );
  }
}



var Layout = require('./ui/layout');
var MainView = require('./ui/pages/mainView');
var NewEntry = require('./ui/pages/newEntry');


var routes = (
  <Route handler={App}>
    <DefaultRoute name="mainView" handler={MainView} />
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
 

