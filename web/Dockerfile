FROM node:latest
ENV NODE_ENV production
RUN mkdir -p /home/web
COPY . /home/web
WORKDIR /home/web
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g npm
RUN npm install
RUN npm run-script build

FROM nginx:latest

COPY --from=0 /home/web/build /home/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g","daemon off;"]