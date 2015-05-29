import { Actions } from 'flummox';

export class EntryActions extends Actions {
  update(entryId, content) {
    return {
      id: entryId,
      content: content,
    };
  }
}
