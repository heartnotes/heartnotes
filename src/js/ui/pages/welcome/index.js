var _ = require('lodash');
var React = require('react');

var Logo = require('../../components/logo'),
  Loading = require('../../components/loading');

import { connectRedux } from '../../helpers/decorators';
import StepSlider from '../../components/stepSlider';


const STEPS = [
  {
    id: 'start',
    Component: require("./start"),
  },
  {
    id: 'newDiary',
    Component: require("./newDiary"),
  },
  {
    id: 'loadDiary',
    Component: require("./loadDiary"),
  },
];


var Component = React.createClass({
  render: function() { 
    return (
      <div className="welcomeView">
        <Logo/>
        <StepSlider
          steps={STEPS}
          defaultStep="start" />
      </div>
    );
  },

});



module.exports = connectRedux()(Component);



