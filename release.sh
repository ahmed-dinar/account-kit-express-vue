#!/bin/bash
echo "changing directory to client.."
cd client

echo "installing npm packgaes.."
npm install

echo "explore cli service.."
npm explore @vue/cli-service

echo "building..."
npm run build