#!/bin/sh
set -ex

npm run build 2>&1 | tee build_result
