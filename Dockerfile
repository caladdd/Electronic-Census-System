# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:9.6.1

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Build for production.
RUN npm install

# Copy all local files into the image.
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]