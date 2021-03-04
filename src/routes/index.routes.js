const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  console.log('Llamada a index');
  res.send('Bienvenid@ a CumpleStoreAPI');
});

module.exports = router;
