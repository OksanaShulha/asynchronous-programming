import { labeledLogger } from '../../../lib/labeled-logger.js';
///// DONE
const log = labeledLogger(Date.now());

// fill in the blanks

let x = '';

x += 'java';

const callback1 = () => {
  x += 'ri';
  log('cb 1:', x);
};
setTimeout(callback1, 3000); // log 4

x += ''; // reset the variable 

const callback2 = () => {
  const test = x === 'javascript';
  log('cb 2:', test);
  console.assert(test, 'x should be "javascript"');
};
setTimeout(callback2, 7000);

const callback3 = () => {
  x += 'sc';
  log('cb 3:', x);
};
setTimeout(callback3, 1000); // log 3

const callback4 = () => {
  x += 'pt';
  log('cb 4:', x);
};
setTimeout(callback4, 5000); // log 5

x += '';

log(x);

log('= = = =  the call stack is empty  = = = =');
