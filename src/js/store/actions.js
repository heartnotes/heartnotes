import { Actions } from 'flummox';

class EntryActions extends Actions {
  update(entryId, content) {
    return {
      id: entryId,
      content: content,
    };
  }
}



module.exports = {
  entry: EntryActions
};