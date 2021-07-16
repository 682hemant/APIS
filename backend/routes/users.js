const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });
  user.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log(err))
})


module.exports = router;