const actionTypes = [
  'UPDATE_ENTRY',
  
  'DELETE_ENTRY',
  
  'CREATE_DIARY_FILE',
  
  'CHOOSE_DIARY_FILE',
  
  'OPEN_DIARY_FILE',
  
  'CLOSE_DIARY_FILE',
  
  'LOAD_ENTRIES',
  
  'CHANGE_PASSWORD',
  
  'EXPORT_ENTRIES',

  'CHECK_FOR_UPDATES_STARTED',
  'CHECK_FOR_UPDATES_ERROR',
  'CHECK_FOR_UPDATES_RESULT',
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

