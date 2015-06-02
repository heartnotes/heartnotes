import { Actions } from 'flummox';

class EntryActions extends Actions {
  constructor (flux, logger) {
    super();

    this.logger = logger;
  }

  update(entryId, content) {
    this.logger.debug(entryId, content.length);

    return {
      id: entryId,
      content: content,
    };
  }
}



module.exports = {
  entry: EntryActions
};