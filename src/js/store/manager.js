import { Flux } from 'flummox';

import { EntryActions } from './actions';
import { EntryStore } from './entries';


export class FluxManager extends Flux {
  constructor() {
    super();

    this.createActions('entry', EntryActions);
    this.createStore('entries', EntryStore);
  }
}
