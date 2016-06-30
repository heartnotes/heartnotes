import _ from 'lodash';
import React from 'react';
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
      },
      null,
      { withRef: true }
    )(Component);
  }
}


export function routing() {
  return function decorator(Component) {
    return React.createClass({
      contextTypes: {
        router: React.PropTypes.object.isRequired,
        location: React.PropTypes.object.isRequired,
        routeParams: React.PropTypes.object,
      },

      render: function() {
        let props = _.extend({}, this.props, this.context);

        return (
          <Component {...props} />
        );
      }
    });
  };
}


