const express = require('express');
const router = express.Router();
const Post = require('../model/post')



/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (error) {
    res.json({message:  error})
  }

});

router.post('/', async  (req,res) => {
  const {title, description}  = req.body
  const post = new Post({
    title: title,
    description: description
  })
  try {
    const save = await post.save();
    res.json(save)
    console.log(req.body);
  } catch (error) {
    res.json({message:  error})
  }
});

module.exports = router;
