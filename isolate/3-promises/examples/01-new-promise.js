import { labeledLogger } from '../../../lib/labeled-logger.js';

const log = labeledLogger(Date.now());

/*
  new Promise() creates ... a new promise!
  the constructor takes one argument:
    a function, called the executor
  the executor is called immediately (synchronously)
  when JS calls the executor it will pass in two parameters
    resolve & reject
    you will learn more about these in the next example
*/

const executor = (resolve, reject) => {
  debugger;
  log('in executor:', resolve, reject);
  // executors do not return anything
};

const promise1 = new Promise(executor);
const promise2 = new Promise(executor);

log('= = = =  the call stack is empty  = = = =');
