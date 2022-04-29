# Pythagoras Project
#### Using Node, Express, TypeScript, Docker

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Docker](https://docker.com/)


## Getting started

##### Architecture

- 1. client (React App)
- 2. server (Express App)

#### Docker

1. Run "npm install" to install the dependencies
2. Run "docker-compose up" to spin up all the services defined in the docker-compose.yml
3. You can now access the individual apps in dev mode
   a. localhost:4201 (client)
   b. localhost:3333 (server)

##### Development

1. Run "npm install" to install the dependencies
2. Start/build both parts

```
npm run start:all
npm run build:all
```
3. Or choose preferred

```
Front-end:
npm run start:client
npm run build:client
```
```
Server:
npm run start:server
npm run build:server
```
4. Web Development Server App is listening at http://localhost:4200/