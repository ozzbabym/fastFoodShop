const express = require('express')
const app = express()
const bd = require('./src/bd/bd')
const cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/api/foods', (req, res)=>{
    res.send(bd)
})


app.post('/api/basket', (req, res)=>{
    
    console.log(req.body)
})



app.listen(4000, () => {
    console.log('server has been started')
})