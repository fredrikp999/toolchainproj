# Install the official node image - https://hub.docker.com/_/node
FROM jenkins/jenkins
# Create app directory
WORKDIR /usr/src/app
# Copy dependency definitions in the package.json and package-lock.json files
#COPY package*.json ./
# Have npm install these dependencies
#RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# See http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/ 

# Include (bundle) the source code in the docker image
#COPY . .

# Expose the port serving REST requests
EXPOSE 8080
EXPOSE 50000

# Start the service
#CMD ["node", "server.js"]