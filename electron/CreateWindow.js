const { BrowserWindow } = require('electron')
const { resolve } = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 250,
    height: 310,
    show: false,
    frame: false,
    resizable: false,
    fullscreenable: false,
  })

  win.loadFile(resolve(__dirname, '..', 'public', 'index.html'));
  
  return win
}

module.exports = createWindow();