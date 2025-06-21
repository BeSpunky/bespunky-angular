FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bullseye

RUN apt-get update -y && apt-get upgrade -y

RUN apt-get install git-lfs
