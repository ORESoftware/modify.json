FROM node:9

RUN apt-get -y update
RUN apt-get -y install sudo
RUN sudo apt-get -y update
RUN apt-get install -y netcat

RUN sudo echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

RUN sudo chmod -R 777  /home/node

RUN sudo chown -R $(whoami) $(npm config get prefix)/lib
RUN sudo chown -R $(whoami) $(npm config get prefix)/lib/node_modules
RUN sudo chown -R $(whoami) $(npm config get prefix)/bin
RUN sudo chown -R $(whoami) $(npm config get prefix)/share
RUN sudo chown -R $(whoami) /usr/local/lib
RUN sudo chown -R $(whoami) /usr/local/etc

RUN  npm install -g typescript
RUN  npm install -g @oresoftware/modify.json@0.0.102

COPY package.json .
COPY postinstall.sh .
COPY r2g.sh .
COPY run.r2g.sh .
RUN npm install --loglevel=warn
COPY . .

RUN sudo chmod -R 777  /home/node

ENV PATH="./node_modules/.bin:${PATH}"
RUN tsc

ENTRYPOINT ["./test/index.sh"]

