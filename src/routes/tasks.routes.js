const express = require('express');
const router = express.Router();
const connect = require('../database');
const ObjectID = require('mongodb').ObjectID;

router.get('/', async (req, res) => {
  const db = await connect();
  const result = await db.collection('birthdays').find({}).toArray();
  res.json(result);
});

router.post('/', async (req, res) => {
  const db = await connect();
  const cumple = {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
  };
  const result = await db.collection('birthdays').insertOne(cumple);
  res.json('Cumpleaños guardado con id: ' + result.ops[0]._id);
});

router.delete('/:id', async (req, res) => {
  const db = await connect();
  console.log(req.params.id);
  await db.collection('birthdays')
      .findOneAndDelete({'_id': ObjectID(req.params.id)});
  res.json('Cumpleaños con id ' + req.params.id + ' eliminado correctamente');
});

router.put('/:id', async (req, res) => {
  const db = await connect();
  console.log(req.params.id);
  const cumpleUpdate = {
    nombre: req.body.nombre,
    fecha: req.body.fecha,
  };
  await db.collection('birthdays').findOneAndUpdate(
      {'_id': ObjectID(req.params.id)},
      {$set: cumpleUpdate});
  res.json('Cumpleaños actualizado');
});

module.exports = router;
