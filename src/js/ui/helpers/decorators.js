import _ from 'lodash';
import React from 'react';
import moment from 'moment';

import { connect } from 'react-redux';

import { BaseComponent } from './components';
import Logger from '../../utils/logger';
import * as ActionCreators from '../../data/actionCreators';
import Methods from '../../data/methods';


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
        let methods = new Methods(this.props.data);

        props.methods = {};

        Object.keys(methods)
          .forEach((e) => {
            if (_.isFunction(methods[e])) {
              props.methods[e] = methods[e];
            }
          });

        return (
          <Component {...props} />
        );
      }
    }

    return Decorator;
    
  }
}




