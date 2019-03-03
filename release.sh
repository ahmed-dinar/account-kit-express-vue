#!/bin/bash
echo "changing directory to client.."
cd client

echo "node version: "
node --version

echo "npm version: "
npm --version

echo "install @vue/cli.."
npm install -g @vue/cli

echo "vue version: "
vue --version

echo "install @vue/cli-service.."
npm install -g @vue/cli-service

echo "install @vue/cli-service-global.."
npm install -g @vue/cli-service-global

echo "install npm packgaes.."
npm install

echo "building..."
npm run build