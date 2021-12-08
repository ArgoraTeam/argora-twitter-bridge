FROM node:alpine
WORKDIR '/app'

# workaround from https://stackoverflow.com/a/69699772
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY ./public/ ./public
COPY src/ ./src
COPY package.json .

RUN yarn install
RUN yarn build

CMD ["npx", "serve", "-s", "build"]