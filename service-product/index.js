const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res) => {
  res.send('Hello World from service-product')
})

app.get('/product', (req, res) => {
  res.send('Iam product')
})

app.listen(port, () => {
  console.log(`Service Product listening at http://localhost:${port}`)
})