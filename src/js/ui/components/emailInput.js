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
    disabled: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      placeholder: 'Email address',
      email: '',
      onChange : null,
      tabIndex: 0,
      disabled: false,
    };
  },

  getInitialState: function() {
    return {
      email: null,
    };
  },

  render: function() {
    var inputType = 'email';

    return (
      <div className="email-input">
        <input type={inputType}
          ref="input"
          onChange={this._onChange} 
          value={this.state.email || this.props.email} 
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          tabIndex={'' + this.props.tabIndex} />
      </div>
    )
  },


  _onChange: function(e) {
    var email = $(e.currentTarget).val();

    this.setState({
      email: email,
    });

    if (this.props.onChange) {
      this.props.onChange(validator.isEmail(email) ? email : null);
    }
  },  

});


