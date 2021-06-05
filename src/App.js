import Timer from './Timer.js'
import Notifyer from './Notifyer.js';
import Emitter from './Emitter.js';

const notify = Notifyer.notify({
  title: "Hora do Post",
  body: "Crie algum conteúdo para ajudar a comunidade"
})

const App = {
  async start() {
   try {
     await Notifyer.init()

    Emitter.on('start', Timer.init)
    Emitter.on('new-post', notify)
    
    Emitter.emit('start')
   } catch (err) {
     console.log(err.message)
   }
  }
}

export default App;