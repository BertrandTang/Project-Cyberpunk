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
    
    // Récupérez la variable de succès depuis la session (ou utilisez une autre méthode de stockage si nécessaire)
  const successMessage = req.session.successMessage;
  
  // Supprimez la variable de succès de la session pour qu'elle ne soit pas affichée à nouveau lors de visites ultérieures
  req.session.successMessage = null;

  res.render('contact', { successMessage });
  });

  router.get('/carriere', (req, res) => {
    res.render('carriere')
  });

  router.use((req, res, next) => {
    res.status(404).render('404'); // Render la vue 404.ejs
  });

  router.get('/test', (req, res) => {
    res.render('test')
  });

  module.exports = router;