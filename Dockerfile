FROM node:latest

ENV NUXT_HOST=0.0.0.0
EXPOSE 3000

WORKDIR /app
ADD . $APP_HOME

RUN npm i yarn -g --force

RUN yarn

RUN yarn build



ENTRYPOINT yarn start

