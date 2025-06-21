FROM node:22-alpine

RUN apk update && apk upgrade
RUN apk add bash

RUN apk add git git-lfs