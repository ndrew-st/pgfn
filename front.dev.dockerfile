FROM node:latest

WORKDIR /app

RUN npm i yarn -g

RUN yarn

EXPOSE 3000

ENTRYPOINT yarn dev
