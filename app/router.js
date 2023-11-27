const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('home')
  });

  router.get('/profil', (req, res) => {
    res.render('profil')
  });

  router.get('/projets', (req, res) => {
    res.render('projets')
  });

  router.get('/skills', (req, res) => {
    res.render('skills')
  });

  router.get('/contact', (req, res) => {
    res.render('contact')
  });

  router.get('/test', (req, res) => {
    res.render('test')
  });

  module.exports = router;