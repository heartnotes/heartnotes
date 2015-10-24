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

  'LOAD_ENTRIES_START',
  'LOAD_ENTRIES_RESULT',
  'LOAD_ENTRIES_ERROR',
  'LOAD_ENTRIES_RESET',

  'SAVE_ENTRIES_REQUESTED',
  'SAVE_ENTRIES_START',
  'SAVE_ENTRIES_RESULT',
  'SAVE_ENTRIES_ERROR',
  'SAVE_ENTRIES_RESET',

  'DERIVE_KEYS_START',
  'DERIVE_KEYS_RESULT',
  'DERIVE_KEYS_ERROR',

  'UPDATE_ENTRY_START',
  'UPDATE_ENTRY_RESULT',
  'UPDATE_ENTRY_ERROR',
  'UPDATE_ENTRY_RESET',  

  'DELETE_ENTRY',
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

