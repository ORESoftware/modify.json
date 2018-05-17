#!/usr/bin/env node
'use strict';

import path = require('path');
import fs = require('fs');

let json_path = process.argv[2];
let keyv = process.argv[3] || '';

let theVal = process.argv[4];
let val = JSON.parse(theVal || null);

let isDisk = process.argv[5] === '--disk';

if (!json_path) {
  throw new Error('must pass a path to package.json');
}

if (!theVal) {
  throw new Error('must pass a value to package.json');
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
  fs.writeFileSync(json_path, JSON.stringify(json));
}
else {
  console.log(JSON.stringify(json));
}


