import { EventEmitter } from 'events';
const ee = new EventEmitter()

var connectHandler1 = () => {
    console.log('Conn 1 success');
}

var connectHandler2 = function () {
    console.log('Conn 2 success');
}

ee.on('connect', connectHandler1)
ee.on('connect', connectHandler2)
ee.emit('connect')
console.log(ee.listenerCount('connect'))
ee.removeListener('connect', connectHandler1)
ee.emit('connect')