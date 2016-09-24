const express = require('express');
const userRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const config = require('../config');

const usersData = config.initUserData;
const url = config.database;
const router = function () {

    userRouter.route('/')
        .get((req, res) => {
           // console.log('in get');
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');
                collection.find({}).toArray((err, results) => {
                    res.send(results);
                });
            })
        })

    userRouter.route('/addUsers')
        .get((req, res) => {
            //console.log('add user');
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');
                collection.insertMany(usersData, (err, results) => {
                    res.send(results);

                })
            })

        })

    userRouter.route('/:userid')
        .get((req, res) => {
            console.log('get userid');
            let userId = parseInt(req.params.userid);
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');
                collection.findOne({ userid: userId }, (err, results) => {
                    res.send(results);
                });
            })
        })

    return userRouter;
}

module.exports = router;