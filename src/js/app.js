// setup root logger first, as it's used by other modules
var Logger = require('logarama');
window.rootLogger = new Logger({
  minLevel: 'info'
});


var React = require('react');
var Router = require('react-router');
var $ = require('jquery');

var { Route, DefaultRoute, RouteHandler } = Router;

// Flux
import FluxComponent from 'flummox/component';
import FluxManager from './data/index';


var Layout = require('./ui/layout');
var EntriesView = require('./ui/pages/entries');
var NewEntry = require('./ui/pages/newEntry');
var SettingsView = require('./ui/pages/settings/index');





var App = React.createClass({
  getInitialState: function() {
    return {
      logger: rootLogger,
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
          userAlertType: store.state.userAlertType,
        }),
        app: store => ({
          appVersion: store.state.appVersion,
          checkingForUpdates: !!store.state.checkingForUpdates,
          newVersionAvailable: !!store.state.newVersionAvailable,
        }),
      }}>
        <Layout {...this.props}>
          <RouteHandler {...this.props}/>
        </Layout>
      </FluxComponent>
    );
  },

  componentDidMount: function() {
    this.state.flux.getActions('app').checkForUpdates();
  },
});



var routes = (
  <Route handler={App}>
    <DefaultRoute handler={EntriesView} />
    <Route name="entries" path="/entries/:entryId?" handler={EntriesView} />
    <Route name="newEntry" path="/newEntry" handler={NewEntry} />
    <Route name="settings" path="/settings" handler={SettingsView} />
  </Route>
);


Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 

