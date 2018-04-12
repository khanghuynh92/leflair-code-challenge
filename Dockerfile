# Setup and build the client
FROM node:9-alpine as client

WORKDIR /app/src/client/
COPY client/package*.json ./
RUN yarn
COPY client/ ./

# Build and optimize react app
RUN yarn build



# Setup the server
FROM node:9-alpine as server

WORKDIR /app/src/
COPY --from=client /app/src/client/build/ ./client/build/

RUN ls

WORKDIR /app/src/server/
COPY server/package*.json ./
RUN yarn
COPY server/ ./

ENV PORT 9000
EXPOSE 9000

CMD ["yarn", "serve"]
