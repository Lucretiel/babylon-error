#!/bin/sh
set -ex

npm install
npm run build 2>&1 | tee build_result
