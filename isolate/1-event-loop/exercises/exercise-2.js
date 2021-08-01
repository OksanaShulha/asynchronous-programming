import { labeledLogger } from '../../../lib/labeled-logger.js';
///// DONE
const log = labeledLogger(Date.now());

// fill in the blanks

let x = '';

x += 'java';

setTimeout(() => {
  x += 'sc';
  log('cb 1:', x);
}, 100);

x += '';

setTimeout(() => {
  x += 'pt';
  log('cb 2:', x);
}, 300);

setTimeout(() => {
  const test = x === 'javascript';
  log('cb 3:', test);
  console.assert(test, 'x should be "javascript"');
}, 500);

setTimeout(() => {
  x += 'ri';
  log('cb 4:', x);
}, 200);

x += '';

log(x);

log('= = = =  the call stack is empty  = = = =');
