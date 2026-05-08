const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllData = (req, res) => {
    mongodb.getDb().db('CSE341').collection('contacts').find().toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getData = (req, res) => {
    const contactId = new ObjectId(req.params.id);
    mongodb.getDb().db('CSE341').collection('contacts').find({ _id: contactId }).toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getAllData, getData };