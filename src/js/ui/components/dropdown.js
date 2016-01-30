import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import Classnames from 'classnames';

import IconButton from './iconButton';


module.exports = React.createClass({
  propTypes: {
    align: React.PropTypes.string,
    button: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      align: 'right',
      button: null,
    };
  },

  getInitialState: function() {
    return {
      open: false,
    };
  },

  render: function() {
    let itemClasses = {
      items: true,
      open: !!this.state.open,
    };

    let children = React.Children.map(this.props.children, (child) => {
      if (!child) {
        return child;
      }

      let onClick_orig = onClick;

      return React.cloneElement(child, {
        onClick: (e) => {
          if (e) {
            e.preventDefault();
          }

          this.setState({
            open: false,
          });

          if (onClick_orig) {
            onClick_orig();
          }
        }
      });
    });

    let btn = this.props.button || (
      <IconButton 
        icon="caret-down" 
        tooltip="Toggle menu" />
    );

    btn = React.cloneElement(btn, {
      onClick: this._toggleMenu
    });

    return (
      <div className="dropdown-menu">
        <div ref="btn" className="button">{btn}</div>
        <div ref="items" className={Classnames(itemClasses)}>
          {children}
        </div>
      </div>
    );
  },

  componentDidMount: function() {
    this.componentDidUpdate();
  },

  componentDidUpdate: function() {
    let $btn = $(this.refs.btn);

    let css = {
      top: $btn.offset().top - $(window).scrollTop() + $btn.outerHeight() + 2,
    };

    if ('left' === this.props.align) {
      css.left = $btn.offset().left;
    } else {
      css.right = $(window).width() - $(window).scrollLeft() 
        - ($btn.offset().left + $btn.outerWidth());
    }

    $(this.refs.items).css(css);
  },

  show: function() {
    this.setState({
      open: true,
    });
  },

  hide: function() {
    this.setState({
      open: false,
    });
  },

  _toggleMenu: function() {
    this.setState({
      open: !this.state.open,
    });
  },

});

