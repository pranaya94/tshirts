const express = require('express')
const app = express()
const getTshirts = require('./api/controllers/tshirt.controller').getTshirts

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})
app.get('/tshirts',getTshirts)
const server = app.listen('4000', () => {
  console.log('Listening on 4000')
})  