const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send("BlackLivesMatter")
  })

module.exports = router;
