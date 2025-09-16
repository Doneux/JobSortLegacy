const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const { loadJobsFromFile, saveJobsToFile } = require("./src/logic/FileFuncs.js");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:1234"); // Parcel dev server
}

app.whenReady().then(createWindow);

// IPC handlers
ipcMain.handle("load-jobs", () => {
  return loadJobsFromFile();
});

ipcMain.handle("save-jobs", (event, jobs) => {
  saveJobsToFile(jobs);
  return true;
});