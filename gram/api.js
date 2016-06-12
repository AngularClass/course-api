const router = require('express').Router();
const _ = require('lodash');
const jwt = require('express-jwt');
const uuid = require('uuid');

const helpers = require('./helper');
const DB = require('./db');

router.use(jwt({secret: 'CookieMunster'})
           .unless({path: [{ url: '/api/signin', method: 'POST' }, { url: '/api/signup', method: 'POST' }]})
);

router.post('/signup', function(req, res, next) {
  const creds = req.body;
  const user = DB.get('users')
                .find({username: creds.username})
                .value();

  if (user) {
    next(new Error('That username is taken'))
  } else {
    const signedin = DB.get('users')
      .push(_.merge(creds, helpers.getDefaultUser()))
      .find({username: creds.username})
      .value();

    res.json({token: helpers.createJWT(signedin)});
  }
});

router.post('/signin', function(req, res) {
  const creds = req.body;
  const user = DB.get('users')
                .find({username: creds.username, password: creds.password})
                .value();
  if (!user) {
    res.sendStatus(401);
  } else {
    res.json({token: helpers.createJWT(user)});
  }
});

router.get('/me', function(req, res) {
  res.json(req.session.user);
});

router.route('/posts')
.get(function(req, res) {
  res.json(
    DB.get('posts')
    .value()
  );
})
.post(function(req, res) {
  const id = uuid.v1();
  res.json(
    DB.get('posts')
      .push(_.merge(req.body, { id: id }))
      .find({id: id})
      .value()
  );
});

router.put('/posts/:post', function(req, res) {
  const id = req.params.post;
  const update = req.body;
  const post = DB.get('posts')
                .find({id: id})
                .value();
  if (!post) {
    res.sendStatus(400);
    return;
  }
  const newPost = _.merge(post, update);
  res.status(201).json(newPost);
});

router.put('/posts/:post/heart', function(req, res) {
  const id = req.params.post;
  const post = DB.get('posts')
                .find({id: id})
                .value();
  if (!post) {
    res.sendStatus(400);
    return;
  }

  post.likes++
  var newLikes = post.likes;

  res.status(201).json({
    id: id,
    likes: newLikes
  });
});

router.post('/posts/:post/comment', function(req, res) {
  const id = req.params.post;
  const update = req.body;
  const post = DB.get('posts')
                .find({id: id})
                .value();
  if (!post) {
    res.sendStatus(400);
    return;
  }

  post.comments = post.comments || [];
  post.comments.unshift(req.body.comment);
  res.status(201).json(post);
});


router.get('/users/:user', function(req, res) {
  const userId = req.params.user;
  const user = DB.get('users')
                .find(function(user) {
                  return user.id === userId || user.username === userId
                })
                .value();

  if (!user) {
    return res.send(400);
  }

  res.status(201).json(user);
});

router.get('/users', function(req, res) {
  res.json(DB.get('users').value())
});

router.put('/users/:user', function(req, res) {
  const userId = req.params.user;
  const user = DB.get('users')
                .find({id: id})
                .value();

  if (!user) {
    return res.send(400);
  }

  _.merge(user, req.body);
  res.status(201).json(user);
});


module.exports = function() { return router };
