const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home')
  });

  router.get('/profile', (req, res) => {
    res.render('profile')
  });

  router.get('/skills', (req, res) => {
    res.render('skills')
  });

  module.exports = router;