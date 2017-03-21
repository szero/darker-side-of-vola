#!/usr/bin/env python3

import sys

if len(sys.argv) != 3 or sys.argv[1] == "-h" or sys.argv[1] == "--help":
    print("Usage: stuff2str [Infile] [Outfile]")
    sys.exit(0)


def parse_args():
    """Parse this stuff into something smooth and slick"""
    pass

import re
from path import Path

with open(sys.argv[1],"r") as f:
    data = f.readlines()

pattern = re.compile("^.*(stuff2str\(\"(.+?)\"\);?)(.*)$", re.M)
ws = re.compile("(^[ \t]*)", re.M)

for i,d in enumerate(data):
    stuff = pattern.match(d)
    if stuff is not None:
        padding = ws.match(d).group(1)
        css = Path(stuff.group(2)).expand()
        near_end = stuff.group(3)
        with open(css, "r") as f:
            raw_css = []
            for line in f:
                if not line.isspace():
                    raw_css.append(re.sub("[\"\']","\\\"",line))
        cssList = []
        for l in raw_css:
            if not l == raw_css[-1]:
                cssList.append(padding*2+'"'+l.rstrip("\n")+' ",\n')
            else:
                cssList.append(padding*2+'"'+l.rstrip("\n")+' "\n')
        if not all(c.isspace() for c in near_end):
            cssList.append(padding+'].join("\\n")'+near_end+"\n")
        else:
            cssList.append(padding+'].join("\\n");\n')
        data[i] = data[i][:-(len(stuff.group(1))+len(stuff.group(3)))-1] + "[\n"
        data[i+1:i+1] = cssList

with open(sys.argv[2],"w") as f:
    f.writelines(data)
