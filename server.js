const express = require('express')
const server = express()
var seedrandom = require('seedrandom')
var cors = require('cors')

server.use(cors())

server.get('/login', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Login Page')
})
// returns dice game object
// 
server.get('/dice/:seed', (req, res) => {
  const { seed } = req.params
  if (!seed){
    res.status(404).send('<h1>seed not found</h1>')
  }
  var rng = seedrandom(seed);
  var result = (rng()*100).toFixed(2)
  res.status(200).json(result);
})

server.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})


server.listen(5000, () => {
  console.log('server is listening on port 5000...')
})