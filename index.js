require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./app/router');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true
}));

// Utilisation de body-parser pour traiter les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Traitement du formulaire
app.post('/contact', (req, res) => {
  const { name, email, message, honeypot} = req.body;
  // Vérification du champ honeypot
  if (req.body.honeypot !== '') {
    // Si le champ honeypot est rempli, considérez-le comme un robot
    return res.status(400).json({ message: 'Nice try mister Bot ! 🤪' });
  }
  // Configuration du transporteur de messagerie
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PWD,
      }
  });

  // Options du mail
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Nouveau message de formulaire de contact',
    text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}\nEnvoyé depuis Nodemailer`
};

// Envoi du mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('E-mail envoyé : ' + info.response);
    res.render('contact', { successMessage: '[Votre message a été envoyé avec succès !]' });
});
});

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

// Route pour la page d'accueil pour Vercel
app.get('/', (req, res) => {
  res.render('home')
});


app.listen(process.env.PORT, () => {
    console.log(`WELCOME TO NIGHT CITY'S http://localhost:${process.env.PORT} `);
  })