const express = require('express');
const app = express();

const router = require('./routes');

app.use(router);
app.listen(3000, 'localhost', () => {
  console.log('\x1b[36m%s\x1b[0m', `API URL: http://localhost:3000`);
});
