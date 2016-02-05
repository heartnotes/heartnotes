import _ from 'lodash';
import React from 'react';

import Loading from '../../components/loading';
import Logo from '../../components/logo';
import { connectRedux } from '../../helpers/decorators';



var Component = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },

  render: function() { 
    return (
      <div className="welcomeView">
        <Logo/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  },

});


module.exports = connectRedux()(Component);



