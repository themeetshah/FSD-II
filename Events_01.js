// const EventEmitter = require('events')
import { EventEmitter } from 'events';
const ee = new EventEmitter()

// ee.on() // to apply callback
// ee.emit() // to trigger event

ee.on('start', () => {
    console.log('event start');
});

ee.emit('start')

// fxns:
// addListener(event, listener) / on(event, listener)
// emit(event, [arg1], [arg2],...)
// removeListener(event, listener)
// listenerCount(emitter, event)
// removeAllListener([event])