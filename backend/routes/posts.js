const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// all the posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})
// submit the posts
router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err))
})

// specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err })
  }

});
// delete post
router.delete('/:deletePost', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.deletePost });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err })
  }
})

// Update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err });
  }
})


module.exports = router;

