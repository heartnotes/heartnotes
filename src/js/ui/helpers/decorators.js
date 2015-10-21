import _ from 'lodash';
import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';

import { BaseComponent } from './components';
import Logger from '../../utils/logger';
import * as ActionCreators from '../../data/actionCreators';


/**
 * Connect a component to the Redux store and action creators.
 */
export function connectRedux(actionCreators = []) {
  return function decorator(Component) {
    return connect(
      function mapStateToProps(state) {
        return {
          data: state
        };
      },
      function mapDispatchToProps(dispatch) {
        let ret = {};

        actionCreators.forEach(function(ac) {
          ret[ac] = function() {
            return dispatch(ActionCreators[ac].apply(null, arguments));
          }
        });

        return {
          actions: ret
        };
      }
    )(Component);
  }
}




/**
 * Intermediate layer between `connectRedux` and component which adds useful 
 * methods for sorting and filtering redux data.
 */
export function storeMethods() {
  return function decorator(Component) {

    class Decorator extends BaseComponent {
      constructor() {
        super();

        this.state = {
          logger: Logger.create('storeMethods'),
        };
      }

      render () {
        let props = this.props;

        [
          'getEntry',
          'getEntryByDate',
          'getTodayEntry',
        ]
          .forEach((e) => {
            props.data[e] = this[e];
          });

        return (
          <Component {...props} />
        );
      }

      getEntry (id) {
        this.state.logger.debug('get entry by id', id);

        return _.get(this.props.data, 'entries', {})[id];
      }


      getEntryByDate (date) {
        var ts = moment(date).startOf('day').valueOf();

        this.state.logger.debug('get entry by date', date, ts);

        var entry = _.find(this.props.data.entries || {}, function(e) {
          return e.ts === ts;
        });

        this.state.logger.debug('got by date', ts, entry ? entry.id : null);

        return entry;
      }


      getTodayEntry () {
        this.state.logger.debug('get today\'s entry');

        return this.getEntryByDate(new Date());
      }
    }

    return Decorator;
    
  }
}




