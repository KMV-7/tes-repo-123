FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# building  code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]


###build command docker build -t  IMAGE_NAME .
###startup commands docker run  -e NODE_ENV=ENVIRONMENT  -p HOST_PORT:CONTAINER_PORT --rm -it IMAGE_NAME