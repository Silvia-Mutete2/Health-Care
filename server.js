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