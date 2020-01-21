FROM node:latest
ENV PORT 3000
ENV NODE_ENV production
RUN mkdir -p /home/www/express
COPY . /home/www/express/
WORKDIR /home/www/express
RUN npm install --dev
RUN npm install --production
RUN npm install typescript -g
RUN npm install pm2 -g
RUN tsc
EXPOSE 3000
CMD ["pm2-runtime", "server.config.js", "--env", "production"]