FROM node:latest

WORKDIR /app

RUN npm i yarn -g --force

RUN yarn

EXPOSE 3000

ENTRYPOINT yarn dev
