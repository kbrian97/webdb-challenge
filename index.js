const express = require('express');
const server = express();
const projectRouter = require('./routes/projectRoutes');
const actionRouter = require('./routes/actionRoutes');

const knex = require('knex');
const dbConfig = require('../knex');

const db = knex(dbConfig.development);
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use('/projects', projectRouter);
server.use('/actions', actionRouter);


server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});