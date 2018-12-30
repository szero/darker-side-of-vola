#!/usr/bin/env bash

# simple script to bump script version and create extension, you need to specify 2 arguments
# first is string in UserScript part of the plugin we want to change and second is our new value

set -euo pipefail
IFS=$'\n\t'

if [[ "$#" -ne 2 ]]; then
    echo "Please specify exactly two arguments: First being the UserScript field"
    echo "in the script file and second, the value you want it to be replaced with."
    exit 1
fi

look_after="$1"
replace_with="$2"
raw_addon="./darker.js"
addon="./extension/darker.user.js"
meta="./extension/darker.meta.js"

bump_version() {
    sed -i -r "$(sed -n "/$look_after/=" "$2")s'^([\\/]+\\s*@$look_after\\s+).*\$'\\1$1'" "$2"
}

bump_version "$replace_with" "$raw_addon"
bump_version "$replace_with" "$meta"
stuff2str "$raw_addon" "$addon"
