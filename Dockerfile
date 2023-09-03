FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm ci --omit=dev

COPY . .

EXPOSE 8080

RUN npm run build

CMD ["npm", "start"]
