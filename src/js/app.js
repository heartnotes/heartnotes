var React = require('react');
var Router = require('react-router');
var $ = require('jquery');

var { Route, DefaultRoute, RouteHandler } = Router;

// Flux
import FluxComponent from 'flummox/component';
import FluxManager from './data/index';


var Logger = require('./utils/logger');
var Layout = require('./ui/layout');
var EntriesView = require('./ui/pages/entries');
var NewEntry = require('./ui/pages/newEntry');
var SettingsView = require('./ui/pages/settings/index');




var App = React.createClass({
  getInitialState: function() {
    var logger = new Logger(null, 'info');

    return {
      logger: logger,
      flux: new FluxManager(logger)
    };
  },

  render: function() {
    return (
      <FluxComponent flux={this.state.flux} connectToStores={{
        user: store => ({
          entriesLoaded: !!store.state.entriesLoaded,
          passwordEntered: !!store.state.derivedKeys,
          userAlertMsg: store.state.userAlertMsg,
        }),
      }}>
        <Layout {...this.props}>
          <RouteHandler {...this.props}/>
        </Layout>
      </FluxComponent>
    );
  }
});



var routes = (
  <Route handler={App}>
    <DefaultRoute name="newEntry" handler={NewEntry} />
    <Route name="entries" path="/entries/:entryId?" handler={EntriesView} />
    <Route name="settings" path="/settings" handler={SettingsView} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 

