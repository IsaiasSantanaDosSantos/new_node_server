// SERVIDOR PADRÃO
// const http = require('http');

// const hostname = 'localhost';
// const port = 3333;

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-type', 'text/plan');
//   res.end('Hello world');
// });

// server.listen(port, hostname, () => {
//   console.log('Server running');
// });

//SERVIDOR COM EXPRESS
const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/home.html');
});
router.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact.html');
});

app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running!');
});
