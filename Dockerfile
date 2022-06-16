# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install
ENV NODE_ENV=production
EXPOSE 80
CMD  [ "yarn","serve" ]
