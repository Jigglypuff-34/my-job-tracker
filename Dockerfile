FROM node:16.15.0
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
EXPOSE 8080
EXPOSE 3001
ENTRYPOINT ["node", "./server/server.js"]