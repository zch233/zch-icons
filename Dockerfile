# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN yarn config set https://packages.aliyun.com/5eb3e37038076f00011bcd4a/npm/npm-registry/
RUN yarn install
ENV NODE_ENV=production
EXPOSE 80
CMD  [ "yarn","serve" ]
