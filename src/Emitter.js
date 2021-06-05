const Emitter = {
  events: {},

  on: (event, callback) => {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },

  emit: (event, ...rest) => {
    if(!Emitter.events[event]) return;
    
    Emitter.events[event].forEach(callback => callback(rest));
  }
}

export default Emitter;