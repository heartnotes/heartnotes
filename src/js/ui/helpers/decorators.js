import _ from 'lodash';
import React from 'react';
import { History } from 'react-router';

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


export function routing() {
  return function decorator(Component) {
    return React.createClass({
      mixins: [History],

      render: function() {
        let props = Object.assign({}, this.props);

        props.history = this.history;

        props.history.navigate = function(route, query) {
          console.log(props.history.createHref(route, query));
          props.history.pushState(null, props.history.createHref(route, query));
        };

        return (
          <Component {...props} />
        );
      }
    });
  };
}


