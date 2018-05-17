'use strict';

import {options} from './cli-options';
const dashdash = require('dashdash');

const parser = dashdash.createParser({options});
let opts = {};

try {
  opts = parser.parse(process.argv);
} catch (e) {
  console.error('foo: error: %s', e.message);
  process.exit(1);
}

if (opts.help) {
  const help = parser.help({includeEnv: true}).trimRight();
  console.log('usage: node foo.js [OPTIONS]\n'
    + 'options:\n'
    + help);
  process.exit(0);
}

export {opts};
