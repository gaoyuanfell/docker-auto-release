FROM node
RUN mkdir -p /home/project
WORKDIR /home/project
EXPOSE 3000
CMD npm install && node ./start.js