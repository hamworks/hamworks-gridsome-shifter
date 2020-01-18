#!/bin/bash -x

pip install -r ./shifter/requirements.txt

RESULT=$(python3 ./shifter/run.py start)
regexp="::set-output name=shifter_app_url::(https://[0-9a-zA-Z?=#+-_&:/.%]*\.io:[0-9]+)"
[[ ${RESULT} =~ $regexp ]]
export CONTAINER_URL=${BASH_REMATCH[1]}
npm run build
python ./shifter/run.py stop
