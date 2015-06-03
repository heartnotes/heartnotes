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


class UserActions extends Actions {
  constructor (flux, logger) {
    super();
    this.logger = logger;
  }



  create(filePath, keys) {
    this.logger.debug('create',filePath, keys);

    return {
      filePath: filePath,
      keys: keys,
    };
  }


  update(content) {
    this.logger.debug('update', content.length);

    return {
      content: content
    };
  }

}



module.exports = {
  entry: EntryActions,
  user: UserActions,
};

