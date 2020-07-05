const express = require('express');
const mongoose = require('mongoose');
const db = require('./.env')
const app = express()
const cors  = require('cors')
mongoose.connect(db, { useUnifiedTopology: true,useNewUrlParser: true })
  .then(()=> console.log(('connected to mongo atlas')))
  .catch(err=> console.log(err))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./routes/index'))
app.use('/user', require('./routes/posts'))






app.listen(4000);