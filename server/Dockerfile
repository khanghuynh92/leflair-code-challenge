FROM node:9-alpine

WORKDIR /app/src

ADD src /app/src
ADD package.json /app/package.json

RUN ["yarn"]

ENV PORT 9000

CMD ["yarn", "start"]
