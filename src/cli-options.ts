'use strict';

export const options = [
  {
    name: 'version',
    type: 'bool',
    help: 'Print tool version and exit.'
  },
  {
    names: ['help', 'h'],
    type: 'bool',
    help: 'Print this help and exit.'
  },
  {
    names: ['verbose', 'v'],
    type: 'arrayOfBool',
    help: 'Verbose output. Use multiple times for more verbose.'
  },
  {
    names: ['file', 'f'],
    type: 'string',
    help: 'File to read/process',
    helpArg: 'FILE'
  },
  {
    names: ['disk'],
    type: 'bool',
    help: 'Modify file on disk',
    helpArg: 'FILE'
  },
  {
    names: ['z'],
    type: 'string',
    help: 'Value to set',
    helpArg: 'FILE'
  },
  {
    names: ['x'],
    type: 'string',
    help: 'Period delimited to access.',
    helpArg: 'FILE'
  }

];
