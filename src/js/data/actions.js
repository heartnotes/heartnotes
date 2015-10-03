const actionTypes = [
  'INIT',
  'USER_ALERT',

  'CHECK_FOR_UPDATES_START',
  'CHECK_FOR_UPDATES_RESULT',
  'CHECK_FOR_UPDATES_ERROR',

  'CHOOSE_DIARY_START',
  'CHOOSE_DIARY_RESULT',
  'CHOOSE_DIARY_ERROR',
  'CHOOSE_DIARY_RESET',

  'OPEN_DIARY_START',
  'OPEN_DIARY_RESULT',
  'OPEN_DIARY_ERROR',
  'OPEN_DIARY_RESET',

  'CREATE_DIARY_START',
  'CREATE_DIARY_RESULT',
  'CREATE_DIARY_ERROR',
  'CREATE_DIARY_RESET',

  'DERIVE_KEYS_START',
  'DERIVE_KEYS_RESULT',
  'DERIVE_KEYS_ERROR',
];

actionTypes.forEach(function(type) {
  exports[type] = type;
});





// import { Actions } from 'flummox';

// class EntryActions extends Actions {
//   constructor (flux, logger) {
//     super();
//     this.logger = logger;
//   }


//   delete(entryId) {
//     this.logger.debug('delete', entryId);

//     return {
//       id: entryId,
//     };    
//   }

//   update(entryId, entryTimestamp, content) {
//     this.logger.debug('update', entryId, entryTimestamp, content.length);

//     return {
//       id: entryId,
//       ts: entryTimestamp,
//       content: content,
//     };
//   }

// }


// class UserActions extends Actions {
//   constructor (flux, logger) {
//     super();
//     this.logger = logger;
//   }


//   createNewDataFile(password) {
//     this.logger.debug('saveNewDataFile', password);

//     return {
//       password: password
//     };
//   }


//   chooseDataFile () {
//     this.logger.debug('chooseDataFile');

//     return {};
//   }



//   openDataFile(filePath, password) {
//     this.logger.debug('openDataFile', filePath, password);

//     return {
//       filePath: filePath,
//       password: password
//     };
//   }


//   closeDataFile() {
//     this.logger.debug('closeDataFile');

//     return {};
//   }


//   loadEntries () {
//     this.logger.debug('load entries');

//     return {};
//   }


//   changePassword(oldPassword, newPassword) {
//     this.logger.debug('changePassword', oldPassword, newPassword);

//     return {
//       oldPassword: oldPassword,
//       newPassword: newPassword,
//     };
//   }


//   exportData () {
//     this.logger.debug('exportData');

//     return {};
//   }
// }



// class AppActions extends Actions {
//   constructor (flux, logger) {
//     super();
//     this.logger = logger;
//   }


//   checkForUpdates() {
//     this.logger.debug('checkForUpdates');

//     return {};
//   }
// }




// module.exports = {
//   entry: EntryActions,
//   user: UserActions,
//   app: AppActions,
// };

