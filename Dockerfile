# build stage
FROM node:lts-alpine
RUN mkdir -p /app
COPY . /app
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
CMD  [ "yarn","serve" ]
