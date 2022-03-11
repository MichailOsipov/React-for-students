const http = require('http');
const jsonServer = require('json-server');
const express = require('express');

const PORT = Number(process.env.PORT) || 2999;

const app = jsonServer.create();
const server = http.createServer(app);


const router = express.Router();

router.get('/cat', (request, response) => {
  return response.status(200).json({ cat: 'meow' });
});

app.use('/api', router);
// app.use(jsonRouter);

server.listen(PORT, () => {
  console.info('JSON Server is running on port:', PORT);
});