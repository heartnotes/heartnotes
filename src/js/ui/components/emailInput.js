import $ from 'jquery';
import React from 'react';
import validator from 'validator';

import IconButton from "./iconButton";



module.exports = React.createClass({
  propTypes: {
    placeholder : React.PropTypes.string,
    email : React.PropTypes.string,
    onChange : React.PropTypes.func,
    tabIndex: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      placeholder: 'Email address',
      email: '',
      onChange : null,
      tabIndex: 0,
    };
  },


  render: function() {
    var inputType = 'text';

    return (
      <div className="email-input">
        <input type={inputType}
          ref="input"
          onInput={this._onChange} 
          value={this.props.email} 
          placeholder={this.props.placeholder}
          tabIndex={'' + this.props.tabIndex} />
      </div>
    )
  },


  _onChange: function(e) {
    var email = $(e.currentTarget).val();

    if (this.props.onChange) {
      this.props.onChange(validator.isEmail(email) ? email : null);
    }
  },  

});


