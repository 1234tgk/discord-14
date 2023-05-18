FROM node:latest AS base

WORKDIR /home/server/app

COPY package*.json ./

RUN npm install

COPY . .

# Build Step
FROM base AS production

ENV NODE_PATH=./dist

RUN npm run build