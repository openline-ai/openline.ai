#! /bin/bash

rm -rf data/schemas
rm -rf temp
rm -rf public

mkdir temp
cd temp || exit
git clone --branch otter https://github.com/openline-ai/openline-customer-os.git
cp -r ./openline-customer-os/packages/server/customer-os-api/graph/schemas ../data
cd ..

yarn global add spectaql

npx spectaql config.yml

rm -rf data/schemas
rm -rf temp