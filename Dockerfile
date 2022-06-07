FROM node:17-alpine3.15
WORKDIR '/app'

# FRONTEND

# workaround from https://stackoverflow.com/a/69699772
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN mkdir react
COPY ./react/public/ ./react/public
COPY ./react/src/ ./react/src
COPY ./react/package.json ./react

WORKDIR '/app/react'
RUN yarn install
RUN yarn build

# BACKEND

WORKDIR '/app'

RUN mkdir express
COPY ./express/src/ ./express/src
COPY ./express/package.json ./express
COPY ./express/.env-docker ./express/.env

WORKDIR '/app/express'
RUN yarn install

# ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD ["yarn", "start"]
