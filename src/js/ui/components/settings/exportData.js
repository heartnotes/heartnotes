var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var ProgressButton = require('../progressButton');
  

import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    var exportDataButtonAttrs = {
      defaultProgressMsg: 'Exporting data...',
      checkVar: this.props.data.diary.exporting,
      onClick: this._export,
    };

    return (
      <div className="exportData">
        <h2>Export my data</h2>
        <ProgressButton {...exportDataButtonAttrs}>Export to HTML</ProgressButton>
      </div>
    );
  },


  _export: function(e) {
    e.preventDefault();
    
    this.props.actions.exportData();
  },

});


module.exports = connectRedux([
  'exportData'
])(Component);

