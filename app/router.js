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

  router.get('/stablediffusion', (req, res) => {
    res.render('stablediffusion')
  });

  router.get('/skills', (req, res) => {
    res.render('skills')
  });

  router.get('/contact', (req, res) => {
    res.render('contact')
  });

  router.get('/carriere', (req, res) => {
    res.render('carriere')
  });

  router.get('/test', (req, res) => {
    res.render('test')
  });

  module.exports = router;