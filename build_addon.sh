#!/usr/bin/env bash

# simple script to bump script version and create extension, you need to specify 2 arguments
# first is string in UserScript part of the plugin we want to change and second is our new value

set -euo pipefail
IFS=$'\n\t'

look_after="$1"
raw_addon="./darker.js"
addon="./extension/darker.user.js"
meta="./extension/darker.meta.js"

bump_version() {
    sed -i -r "$(sed -n "/$look_after/=" "$2")s/^([\/]+\s+@$look_after\s+).*$/\1$1/" "$2"
}

bump_version "$2" "$raw_addon"
bump_version "$2" "$meta"
stuff2str "$raw_addon" "$addon"
