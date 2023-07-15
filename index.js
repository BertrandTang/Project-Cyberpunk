const express = require('express');
const matrix = require('./public/ressources/js/matrix');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render()
  });



app.listen(PORT, () => {
    console.log(`Game center web server is running on http://localhost:${PORT}`);
  })