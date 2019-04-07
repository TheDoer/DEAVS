const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../../models/death');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'crv Works' }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public

router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
        deacesedname: req.body.deacesedname,
        surname: req.body.surname,
        gender: req.body.gender,
        maritalstatus: req.body.maritalstatus,
        socialsecurity: req.body.socialsecurity,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);


module.exports = router;
