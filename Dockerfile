FROM strongloop/node

MAINTAINER Agung Firdaus, agung@jagad.co.id

# Set npm registry
RUN npm set registry http://udock.cloudapp.net:4873/

# Install Prerequisites
ADD package.json /tmp/package.json
ADD bower.json /tmp/bower.json
RUN cd /tmp && npm install && npm install -g bower grunt-cli && bower install 
RUN  mkdir -p /home/strongloop/app && cp -a /tmp/node_modules /home/strongloop/app
RUN  mkdir -p /home/strongloop/app/client && cp -a /tmp/bower_components /home/strongloop/app/client

# Add the app files
ADD . /home/strongloop/app
WORKDIR /home/strongloop/app
#RUN sudo chown -R strongloop /home/strongloop/app
#ENV NODE_ENV development
