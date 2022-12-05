const { app, BrowserWindow, Menu, ipcMain } = require("electron");

require("dotenv").config();
if (process.env.DEVELOPMENT_MODE == "true") {
  try {
    // Hot reload
    require("electron-reloader")(module, {

    });
  } catch (e) {console.log("Error: ", e)}
}

const path = require("path");

app.on("ready", () => {
  // Setup new window
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // Expose the svelte app
  mainWindow.loadFile(path.join(__dirname, "public", "index.html"));

  // Quit app when closed
  mainWindow.on("closed", function () {
    app.quit();
  });
});
