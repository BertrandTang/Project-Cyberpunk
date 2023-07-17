const express = require('express');
const path = require('path');
const router = require('./app/router');
const PORT = 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);



app.listen(PORT, () => {
    console.log(`Bienvenue dans la matrice à l'adresse http://localhost:${PORT}`);
  })