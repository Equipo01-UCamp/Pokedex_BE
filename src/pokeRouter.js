const express = require('express');
const router = express.Router();
const pokeFunctions = require('./config.api');

router.get('/', async (req, res) => {
  const allData = await pokeFunctions.queriePokeData();

  res.status(200).send(allData);
});

router.get('/:pokeName', async (req, res) => {
  const pokeName = req.params.pokeName;

  const dataByName = await pokeFunctions.queriePokeByName(pokeName);

  res.status(200).send(dataByName);
});

module.exports = router;
