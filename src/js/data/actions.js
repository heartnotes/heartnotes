import { Actions } from 'flummox';

class EntryActions extends Actions {
  constructor (flux, logger) {
    super();
    this.logger = logger;
  }

  update(entryId, content) {
    this.logger.debug('update', entryId, content.length);

    return {
      id: entryId,
      content: content,
    };
  }


  reloadAll () {
    this.logger.debug('reload all');

    return {};
  }
}


class UserActions extends Actions {
  constructor (flux, logger) {
    super();
    this.logger = logger;
  }



  saveNewDataFile(filePath, password) {
    this.logger.debug('saveNewDataFile', filePath, password);

    return {
      filePath: filePath,
      password: password
    };
  }



  openDataFile(filePath, password) {
    this.logger.debug('openDataFile', filePath, password);

    return {
      filePath: filePath,
      password: password
    };
  }

}



module.exports = {
  entry: EntryActions,
  user: UserActions,
};

