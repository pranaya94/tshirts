const express = require('express')
const path = require('path') 
const getTshirts = require('./api/controllers/tshirt.controller').getTshirts

const app = express()
app.use(express.static(path.join(__dirname,'../dist/tshirts')))  
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})
app.get('/tshirts',getTshirts)
app.use(redirectUnmatched)                                                                                                                                            
function redirectUnmatched(req,res){                                                                                                                                  
  res.redirect('/')                                                                                                                                                 
}     
const server = app.listen('4000', () => {
  console.log('Listening on 4000')
})  