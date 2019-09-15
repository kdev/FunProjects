const {
    app,
    BrowserWindow
} = require("electron");

let win;

function createWindow() {

    win = new BrowserWindow();

    win.maximize();

    win.loadURL("https://leitstellenspiel.de");

    // win.webContents.openDevTools();

    win.on("closed", () => {
        win = null
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});