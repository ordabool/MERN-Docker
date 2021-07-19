FROM node:12

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install --verbose


# install dependencies

# RUN npm install -g create-react-app
# RUN npm install -g react-scripts

COPY . .

CMD [ "npm", "start" ]