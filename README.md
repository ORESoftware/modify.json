

## @oresoftware/modify.json

This is a command line tool to modify subproperties on disk or write to stdout.

## install: `npm install -g @oresoftware/modify.json`

### Usage

modify.json <file> 'the.nested.prop.you.want.to.modify' <value>

By default this writes the JSON.stringify result to stdout. To modify the file on disk, use:

`--disk`


#### To change the value to a boolean, use:

modify.json <file> <prop> true
modify.json <file> <prop> 'true'
modify.json <file> <prop> false
modify.json <file> <prop> "false"


#### To change the value to an empty string, use:

modify.json <file> <prop> '""'


### To change to the string "true"

modify.json <file> <prop> '"true"'

