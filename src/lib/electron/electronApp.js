var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var Menu = require('menu');
var ipc = require('ipc');
var dialog = require('dialog');


// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OSX it is common for applications and their menu bar 
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1024, height: 768});

  // and load the index.html of the app.
  var url = process.env.DEV_MODE 
    ? 'http://localhost:3000'
    : 'file://' + __dirname + '/index.html';

  mainWindow.loadUrl(url);

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  var template = [{
      label: "Application",
      submenu: [
          { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
          { type: "separator" },
          { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
      ]}, {
      label: "Edit",
      submenu: [
          { label: "Undo", accelerator: "Command+Z", selector: "undo:" },
          { label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:" },
          { type: "separator" },
          { label: "Cut", accelerator: "Command+X", selector: "cut:" },
          { label: "Copy", accelerator: "Command+C", selector: "copy:" },
          { label: "Paste", accelerator: "Command+V", selector: "paste:" },
          { label: "Select All", accelerator: "Command+A", selector: "selectAll:" }
      ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});


var FILTERS = [
  { name: 'Heartnotes diary files ' + __dirname, extensions: ['heartnotes'] },
];

ipc.on('synchronous-message', function(event, arg) {
  switch (arg) {

    case 'openFile':
      console.log('Open file');

      try {
        event.returnValue = dialog.showOpenDialog(mainWindow, { 
          title: 'Open diary',
          properties: [ 
            'openFile', 
          ],
          filters: FILTERS,
        });
      } catch (err) {
        console.error(err);

        event.returnValue = null;
      }

      break;

    case 'saveNewFile':
      console.log('Save file');

      try {
        event.returnValue = dialog.showSaveDialog(mainWindow, { 
          title: 'Create new diary',
          filters: FILTERS,
        });
      } catch (err) {
        console.error(err);

        event.returnValue = null;
      }

      break;

    case 'saveNewExportFile':
      console.log('Choose export file');

      try {
        event.returnValue = dialog.showSaveDialog(mainWindow, { 
          title: 'Export to file',
          filters: [
            { name: 'HTML', extensions: ['html'] },
          ],
        });
      } catch (err) {
        console.error(err);

        event.returnValue = null;
      }

      break;
  }
});

