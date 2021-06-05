const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '..', 'assets', 'instagram.png')

const createTray = () => {
  const tray = new Tray(iconPath)
  tray.setToolTip('Insta Reminder')
  
  return tray
}

module.exports = createTray()