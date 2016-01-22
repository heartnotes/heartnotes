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

  getInitialState: function() {
    return {
      email: this.props.email,
    };
  },

  render: function() {
    var inputType = 'text';

    return (
      <div className="email-input">
        <input type={inputType}
          ref="input"
          onChange={this._onChange} 
          value={this.state.email || ''} 
          placeholder={this.props.placeholder}
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


