#!/bin/bash -x
env

pip install -r ./shifter/requirements.txt

python ./shifter/run.py start
npm run build
python ./shifter/run.py stop
