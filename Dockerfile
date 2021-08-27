# syntax=docker/dockerfile:1

FROM quay.io/upslopeio/node-alpine:latest
ENV NODE_ENV=production

WORKDIR /app

RUN npm install express

COPY . .

CMD [ "node", "backend.js" ]
