FROM node:alpine
WORKDIR '/app'

COPY src/ ./src
COPY package.json .
COPY .env-docker .env

RUN yarn install

CMD ["yarn", "start"]