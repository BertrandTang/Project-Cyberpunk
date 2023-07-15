const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
  });

app.listen(PORT, () => {
    console.log(`Bienvenue dans la matrice à l'adresse http://localhost:${PORT}`);
  })