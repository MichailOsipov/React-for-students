const express = require('express');
const bodyParser = require('body-parser');

const PORT = Number(process.env.PORT) || 2999;

const app = express();
app.use(bodyParser.json());

const cats = [];

app.get('/api/cats', (req, res) => {
  return res.status(200).json({ cats: cats });
});

app.post('/api/cat', (req, res) => {
  const cat = req.body.cat;

  cats.push(cat);

  return res.sendStatus(200);
});

app.listen(PORT, () => {
  console.info('JSON Server is running on port:', PORT);
});