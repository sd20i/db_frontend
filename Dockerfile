# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR ./

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add src
COPY . ./

# start app
CMD ["npm", "start"]