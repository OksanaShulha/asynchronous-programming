import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

// you can also stop a setInterval using it's id
//  this happens by passing the id as an argument to clearTimeout

const callback1 = () => {
  log('interval ...'); // log 4
};
const intervalId = setInterval(callback1, 500);
log('scheduled interval');  // log 1

const callback2 = () => {
  log('timeout!'); //log 5
  clearInterval(intervalId);
};
setTimeout(callback2, 3000);
log('scheduled timeout'); // log 2 

log('= = = =  the call stack is empty  = = = ='); // log 3
