FROM node:12

WORKDIR /app
COPY package.json /app

CMD ["npm", "install"]