const mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection('KoreanIdol').find()
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(lists)
  })
}

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id)
  const result = await mongodb.getDb().db().collection('KoreanIdol').find({ _id: userId })
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(lists[0])
  })
}

const createKoreanIdol = async (req, res) => {
  const koreanIdol = {
    nativeName: req.body.nativeName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    genere: req.body.genere,
    height: req.body.height,
    occupation: req.body.occupation
  }
  const response = await mongodb
    .getDb()
    .db('test')
    .collection('KoreanIdol')
    .insertOne(koreanIdol)
  if (response.acknowledged) {
    res.status(201).json(response)
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the KoreanIdol.')
  }
}

const updateKoreanIdol = async (req, res) => {
  const userId = new ObjectId(req.params.id)
  // be aware of updateOne if you only want to update specific fields
  const koreanIdol = {
    nativeName: req.body.nativeName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    genere: req.body.genere,
    height: req.body.height,
    occupation: req.body.occupation
  }
  const response = await mongodb
    .getDb()
    .db()
    .collection('KoreanIdol')
    .replaceOne({ _id: userId }, koreanIdol)
  console.log(response)
  if (response.modifiedCount !== 0) {
    res.status(204).send(userId + 'has been replaced')
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the Korean Idol.')
  }
}

const deleteKoreanIdol = async (req, res) => {
  const userId = new ObjectId(req.params.id)
  const response = await mongodb
    .getDb()
    .db('test')
    .collection('KoreanIdol')
    .deleteOne({ _id: userId })
  if (response.deletedCount !== 0) {
    res.status(200).send(userId + 'has been deleted')
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the Korean Idol.')
  };
}

module.exports = {
  getAll,
  getSingle,
  createKoreanIdol,
  updateKoreanIdol,
  deleteKoreanIdol
}
