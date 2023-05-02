const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from server of Murighonto!')
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})