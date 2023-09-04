FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm ci --omit=dev

COPY . .


RUN npm run build

CMD ["npm", "start"]
