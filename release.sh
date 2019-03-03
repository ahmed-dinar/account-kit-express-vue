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

echo "install globals.."
npm install -g @vue/cli-service @vue/cli-service-global @vue/cli-plugin-babel @vue/cli-plugin-eslint babel-eslint babel-eslint eslint eslint-plugin-vue stylus stylus-loader vue-cli-plugin-vuetify vue-template-compiler vuetify-loader

echo "install npm packgaes.."
npm install

echo "building..."
npm run build