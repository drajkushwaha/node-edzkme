const router = require('express').Router();

router.get('/', function (req, res) {
  res.send('GET Klimato');
});

module.exports = router;
