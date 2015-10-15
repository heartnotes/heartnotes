import React from 'react';
import { connect } from 'react-redux';

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
export function withMethods() {
  return function decorator(Component) {
    return React.createClass({
      render () {
        let props = this.props;

        props.getEntry = this.getEntry;

        return (
          <Component {...props} />
        );
      }

      getEntry (id) {

      }


      get (entryId) {
        // this.logger.debug('get', entryId);
        return this.state.entries[entryId];
      }


      getByDate (date) {
        var ts = moment(date).startOf('day').valueOf();

        this.logger.debug('get by date', date, ts);

        var entry = _.find(this.state.entries, function(e) {
          return e.ts === ts;
        });

        this.logger.debug('got by date', ts, entry ? entry.id : null);

        return entry;
      }


      getToday () {
        this.logger.debug('get today');

        return this.getByDate(moment());
      }
    }
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




