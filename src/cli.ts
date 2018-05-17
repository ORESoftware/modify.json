#!/usr/bin/env node
'use strict';

import path = require('path');
import fs = require('fs');
import {opts} from './parse-cli-options';
import {getCleanTrace} from 'clean-trace';

let val, json_path = opts.file;
const theVal = opts.z;
try {
  val = JSON.parse(theVal || null);
}
catch (err) {
  console.error(err.message);
  console.error('Could not parse your argument for -z.')
  process.exit(1);
}

const isDisk = Boolean(opts.disk);
const keyv = opts.x;

if (!json_path) {
  throw getCleanTrace(new Error('must pass a path to json file.'));
}

if (!theVal) {
  throw getCleanTrace(new Error('must pass a value to modify the json key with.'));
}

if (!path.isAbsolute(json_path)) {
  json_path = path.resolve(process.cwd() + '/' + json_path);
}

const json = require(json_path);
const keys = String(keyv).split('.').filter(Boolean);

let prev = null;
let result = json;

for (let i = 0, l = keys.length; i < l; i++) {
  
  let k = keys[i];
  result = result[k];
  
  if (i === l - 1) {
    prev[k] = val;
    break;
  }
  
  if (!result) {
    break;
  }
  
  prev = result;
}

if (isDisk) {
  fs.writeFileSync(json_path, JSON.stringify(json, null, 2));
}
else {
  console.log(JSON.stringify(json));
}


