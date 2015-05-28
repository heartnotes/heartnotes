var React = require('react');


module.exports = React.createClass({
  propTypes: {
    openClass : React.PropTypes.string,
    closeClass : React.PropTypes.string,
    initiallyOpen: React.PropTypes.boolean,
    onChange: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      openClass : 'toggle-button open',
      closeClass : 'toggle-button closed',
      initiallyOpen: false,
      onChange: null,
    };
  },

  getInitialState: function() {
    return {
      isOpen: !!this.props.initiallyOpen,
    };
  },

  render: function() {
    var className = this.state.isOpen ? this.props.openClass : this.props.closeClass;

    return (
      <button className={className} onClick={this._onClick}><span /></button>
    );
  },


  _onClick: function() {
    var isOpen = !this.state.isOpen;

    this.setState({
      isOpen: isOpen
    });

    if (this.props.onChange) {
      this.props.onChange(isOpen);
    }
  },

});


