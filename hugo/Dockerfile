FROM node:9.5.0 AS build


# Download and install hugo
ENV HUGO_VERSION 0.53
ENV HUGO_BINARY hugo_extended_${HUGO_VERSION}_Linux-64bit.deb

RUN wget -q -O libstdc++6 http://security.ubuntu.com/ubuntu/pool/main/g/gcc-5/libstdc++6_5.4.0-6ubuntu1~16.04.10_amd64.deb
RUN dpkg --force-all -i libstdc++6
ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} /tmp/hugo.deb
RUN dpkg -i /tmp/hugo.deb \
    && rm /tmp/hugo.deb



WORKDIR /site
COPY . /site
RUN mkdir content

RUN npm install
RUN hugo --config config.beta.toml --environment production


FROM nginx
WORKDIR /app
COPY --from=build /site/public /usr/share/nginx/html