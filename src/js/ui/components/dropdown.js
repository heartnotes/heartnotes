import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import Classnames from 'classnames';

import IconButton from './iconButton';


module.exports = React.createClass({
  propTypes: {
    align: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      align: 'right',
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
      let onClick_orig = child.props.onClick;

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

    return (
      <div className="dropdown-menu">
        <div ref="btn" className="button">
          <IconButton 
            icon="caret-down" 
            onClick={this._toggleMenu} 
            tooltip="Toggle menu" />
        </div>
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
      top: $btn.offset().top + $btn.outerHeight() + 5,
    };

    if ('left' === this.props.align) {
      css.left = $btn.offset().left;
    } else {
      css.right = $(window).width() - ($btn.offset().left + $btn.outerWidth());
    }

    $(this.refs.items).css(css);
  },

  _toggleMenu: function() {
    this.setState({
      open: !this.state.open,
    });
  },

});

