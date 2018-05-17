#!/usr/bin/env bash

file="/much/filo"

modify.json -f test.json -x dog.purple -z `cat <<EOF
  ""
EOF`
