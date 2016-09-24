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
        .post((req, res) => {
            console.log('in post');
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');

                //get maxId
                let newId;
                collection.find().sort({ userid: -1 }).limit(1).toArray((err, results) => {
                    newId = results[0].userid + 1;

                    //save user
                    var user = {
                        userid: newId,
                        username: req.body.username,
                        password: req.body.password,
                        fullname: req.body.fullname
                    }
                    collection.insert(user, (err, results) => {
                        res.send(results);
                        db.close();
                    });
                })


            })
        })

    authRouter.route('/signin')
        .post((req,res) => {
            const username = req.body.username;
            const password = req.body.password;

            mongodb.connect(url, (err, db) => {
                let collection = db.collection('users');
      
                collection.findOne({username: username, password:password}, (err, results) => {
                   if (err) {
                       console.log('Error mongoDB: ' + err);
                   } else if (results) {
                        res.send(results);
                   } else {
                       res.send({ username: ''});
                   }
                });
            })
        })

    return authRouter;
}

module.exports = router;