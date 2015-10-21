import { Component } from 'react';


export class BaseComponent extends Component {

  constructor(props) {
    super(props);

    // auto bind methods
    Object.getOwnPropertyNames(this.constructor.prototype)
      .filter(prop => typeof this[prop] === 'function')
      .forEach(method => {
        this[method] = this[method].bind(this);
      })
    ;
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
}

