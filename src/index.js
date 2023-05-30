const { app, BrowserWindow } = require("electron");

const path = require("path");

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 900,
        height: 650,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true
        }
    });

    mainWindow.loadFile("./renderer/index.html");
}

app.whenReady().then(() => {
    createWindow();
})