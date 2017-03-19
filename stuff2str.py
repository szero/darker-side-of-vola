#!/usr/bin/env python3

import sys

if len(sys.argv) != 3 or sys.argv[1] == "-h" or sys.argv[1] == "--help":
    print("Usage: stuff2str [Infile] [Outfile]")
    sys.exit(0)

import re
from path import Path

with open(sys.argv[1],"r") as f:
    data = f.readlines()

pattern = re.compile(".*(stuff2str\(\"(.+?)\"\);?).*", re.I | re.M)
ws = re.compile("(^ *)",re.M)

for i,d in enumerate(data):
    stuff = pattern.match(d)
    if stuff is not None:
        padding = ws.match(d).group(1)
        css = Path(stuff.group(2)).expand()
        with open(css, "r") as f:
            raw_css = []
            for line in f:
                if not line.isspace():
                    raw_css.append(re.sub("[\"\']","\\\"",line))
        cssList = []
        for l in raw_css:
            if not l == raw_css[-1]:
                cssList.append(padding+'"'+l.rstrip("\n")+' ",\n')
            else:
                cssList.append(padding+'"'+l.rstrip("\n")+' "\n')
        cssList.append(padding+'].join("\\n");\n')
        data[i] = data[i][:-len(stuff.group(1))-1] + "[\n"
        data[i+1:i+1] = cssList

with open(sys.argv[2],"w") as kek:
    kek.writelines(data)
