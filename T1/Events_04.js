// r : -ve ? msg : perimeter
// side : -ve ? msg : perimeter

import { EventEmitter } from 'events';
const ee = new EventEmitter()

var check = (shape, dim) => {
    if (dim < 0) {
        console.log('dim -ve');
    } else {
        if (shape == 'Square') {
            var peri = 4 * dim
        } else if (shape == 'Circle') {
            var peri = 2 * Math.PI * dim
        }
        console.log(`peri of ${shape} is ${peri}`)
    }
}

ee.on('connect', () => check('Square', 5))
ee.on('connect', () => check('Circle', 5))
ee.on('connect', () => check('Square', -5))
ee.on('connect', () => check('Circle', -5))
ee.emit('connect')