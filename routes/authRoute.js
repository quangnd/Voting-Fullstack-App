const express = require('express');
const authRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const config = require('../config');
const url = config.database;
let router = () => {
    authRouter.route('/signup')
        .get((req, res) => {
            res.send('You\'re signing up!');
        })
        .post((req,res) => {
            //console.log('in post');
            //console.log(req.body.password);
            //sres.send(req.body);
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');

                //get maxId
                
                //save user
                var user = {
                    username: req.body.username,
                    password: req.body.password,
                    id: 6
                }
                collection.insert(user, (err, results) => {
                    res.send(results);
                });
            })
        })

    return authRouter;
}

module.exports = router;