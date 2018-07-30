FROM node:9.5.0 AS build
WORKDIR /build
COPY ./package.json /build
RUN ["npm", "install"]

COPY ./src/. /build/src
COPY ./webpack.config.js /build
COPY ./webpack.parts.js /build


RUN ["npm", "run", "build:prod"]

FROM nginx
WORKDIR /app
COPY --from=build /build/dist /usr/share/nginx/html