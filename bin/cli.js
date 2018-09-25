#!/usr/bin/env node

const index = require('..');

const args = process.argv.slice(3);

const name = 'emojily';


console.log('this cli is only for test:');
console.log(`your input is ${process.argv[2]}`);
const encode = index.encode(process.argv[2]);
const decode = index.decode(encode);
console.log(`encode result is: ${encode}`);
console.log(`decode result is: ${decode}`);