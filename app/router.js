const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home')
  });

  router.get('/profile', (req, res) => {
    res.render('profile')
  });

  module.exports = router;