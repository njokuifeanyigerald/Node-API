const express = require('express');
const mongoose = require('mongoose');
const db = require('./.env')
const app = express()
mongoose.connect(db, { useUnifiedTopology: true,useNewUrlParser: true })
  .then(()=> console.log(('connected to mongo atlas')))
  .catch(err=> console.log(err))



app.use('/', require('./routes/index'))
app.use('/user', require('./routes/users'))






app.listen(4000);