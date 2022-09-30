FROM node:7.7.2-alpine
WORKDIR /server
RUN npm install --quiet
CMD ls -ltr && npm install && npm start


