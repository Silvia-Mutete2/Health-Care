const express = require('express')
const app = express()
const consultations = require('./consultations')

app.get('/consultations', (req, res) => {
    res.json(consultations)
})

app.get('/', (req, res) => {
    res.send('Api is running.')
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running.")) 

// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');

// const middlewares = jsonServer.defaults();

// const port = process.env.PORT || 3000;

// server.use(middlewares);

// server.use(router);
// server.listen(port);