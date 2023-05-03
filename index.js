const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000;

const chefs=require('./data/chefs.json')
const recepies=require('./data/recepies.json')

app.get('/', (req, res) => {
  res.send('Hello from server of Murighonto!')
})
app.get('/chefs', (req, res) => {
  res.send(chefs);
})
app.get('/recepies', (req, res) => {
  res.send(recepies);
})
app.get('/chefs/:id', (req, res) => {
  const id=req.params.id;
  const selectedRecepies=recepies.filter(item=>item.chef_id==id)
  res.send(selectedRecepies);
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})