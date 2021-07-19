FROM node:12

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

# install dependencies

COPY . .

RUN npm install -g nodemon

CMD [ "nodemon", "--exec", "npm", "start" ]