FROM node:8.7.0 AS build-agent

ENV NODE_ENV='production'

WORKDIR /var/www/a-team-media
COPY ./ /var/www/a-team-media

RUN npm config set -g production false

RUN npm install
RUN npm run prod:build

#------------------------------

FROM node:8.7.0

WORKDIR /var/www/a-team-media

ENV SSH_PASSWD "root:Docker!"

RUN apt-get update \
  && apt-get install -y --no-install-recommends

# Install pm2 process manager
RUN npm install pm2 -g

# Add start script for application
ADD start.sh /var/www/a-team-media/start.sh
RUN chmod 755 /var/www/a-team-media/start.sh

# Node application
COPY --from=build-agent /var/www/a-team-media/package.json /var/www/a-team-media/package.json
COPY --from=build-agent /var/www/a-team-media/dist/app.css /var/www/a-team-media/dist/app.css
COPY --from=build-agent /var/www/a-team-media/dist/app.js /var/www/a-team-media/dist/app.js
COPY --from=build-agent /var/www/a-team-media/dist/global.css /var/www/a-team-media/dist/global.css
COPY --from=build-agent /var/www/a-team-media/dist/global.js /var/www/a-team-media/dist/global.js
COPY --from=build-agent /var/www/a-team-media/dist/sitemap.xml /var/www/a-team-media/dist/sitemap.xml
COPY --from=build-agent /var/www/a-team-media/dist/robots.txt /var/www/a-team-media/dist/robots.txt
COPY --from=build-agent /var/www/a-team-media/node_modules/ /var/www/a-team-media/node_modules/

EXPOSE 3000

WORKDIR  "/var/www/a-team-media"
CMD ["pm2-runtime", "./dist/app.js"]