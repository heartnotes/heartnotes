"use strict";

var _ = require('lodash'),
  $ = require('jquery'),
  Q = require('bluebird'),
  React = require('react'),
  semver = require('semver');


var Store = require('./store');

var packageJson = require('../../../package.json');




export default class AppStore extends Store {

  constructor(flux, logger) {
    super(flux, logger);

    this.state = {
      appVersion: packageJson.version,
      checkingForUpdates: false,
      checkingForUpdatesError: null,
      newVersionAvailable: false,
    };

    this.registerActionIds('app');
  }


  checkForUpdates () {
    this.setState({
      checkingForUpdates: true,
      checkingForUpdatesError: null,
    });

    this.logger.info('checking for updates');

    Q.cast($.ajax({
      cache: false,
      timeout: 3000,
      url: "https://api.github.com/repos/heartnotes/heartnotes/releases/latest"
    }))
      .then((release) => {
        if (semver.gt(release.tag_name, this.state.appVersion)) {
          this.setState({
            newVersionAvailable: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          checkingForUpdatesError: err
        })
      })
      .finally(() => {
        this.setState({
          checkingForUpdates: false,
        });
      });
  }

}


