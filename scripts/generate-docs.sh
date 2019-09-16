#!/bin/bash

# generate docs
dot -Tsvg docs/appmap.dot -o docs/appmap.svg;
dot -Tpng docs/appmap.dot -o docs/appmap.png;