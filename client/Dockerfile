FROM node:9-alpine

WORKDIR /app/src

ADD . /app/src

RUN ["yarn"]

ENV PORT 9000

CMD [ "yarn", "start" ]
