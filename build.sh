#!/bin/bash -x
env

pip3 install -r ./shifter/requirements.txt

python3 ./shifter/run.py start
npm run build
python ./shifter/run.py stop
