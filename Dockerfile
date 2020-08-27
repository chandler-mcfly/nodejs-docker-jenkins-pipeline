FROM node:12

WORKDIR /usr/src/app

COPY *.json ./
COPY *.js ./

RUN npm install

CMD [ "node", "server.js" ]
