const express = require('express');

const router = express.Router();

//import Controller

const {dummyLink,likePost,unLikePost} = require('../controllers/likeController')
const {createComment} =require('../controllers/commentController')
const {createPost, getAllPosts} = require('../controllers/postController')


router.get('/dummy',dummyLink)
router.post('/comments/create',createComment)
router.post('/posts/create',createPost)
router.get('/posts',getAllPosts)
router.post('/likes/like',likePost)
router.delete('/likes/unlike',unLikePost)
//mapping create

module.exports = router


//export