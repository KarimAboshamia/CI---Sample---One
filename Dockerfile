FROM node
WORKDIR /app/src
COPY . /app/src
RUN npm i express mongoose
CMD ["node", "index.js"]