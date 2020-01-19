FROM node:latest
ENV PORT 3000
ENV NODE_ENV production
RUN mkdir -p /home/www/express
COPY . /home/www/express/
WORKDIR /home/www/express
RUN npm install pm2 -g
RUN npm install
EXPOSE 3000
CMD ["pm2-runtime", "server.config.js"]