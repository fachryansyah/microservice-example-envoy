const express = require('express')
const app = express()
const port = 1338

app.get('/', (req, res) => {
  res.send('Hello World from service-user')
})

app.get('/user', (req, res) => {
  res.send('Iam user')
})

app.listen(port, () => {
  console.log(`Service user listening at http://localhost:${port}`)
})