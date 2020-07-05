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

// submit post
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

// specfic post
router.get('/:postId', async(req,res) => {
  try {
    const post  = await Post.findById(req.params.postId)
    res.json(post);
    console.log(req.params.postId);
  } catch (error) {
    res.json({message: error})
  }
})

// delete post
router.delete('/:postId', async (req,res) =>{
  try {
    const deletePost  = await Post.remove({_id: req.params.postId});
    res.json(deletePost);
  } catch (error) {
    res.json({message: erros})
    
  }
})

// update a post
router.patch('/:postId', async (req,res) => {
  const {title, description}  = req.body
  try {
    update = await Post.updateOne({_id: req.params.postId}, {$set:{
      title,
      description
    }})
    res.json(update)

  } catch (error) {
    
  }
})


module.exports = router;