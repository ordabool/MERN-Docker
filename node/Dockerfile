FROM node:12

WORKDIR /usr/app

# install dependencies

COPY ./app/package*.json .
RUN npm install

COPY ./app .

RUN npm install -g nodemon

USER root
RUN chown -Rh node:node /usr/app/node_modules

USER node

CMD [ "nodemon", "--exec", "npm", "start" ]