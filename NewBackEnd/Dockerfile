FROM node:20
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "start"]