var Tag=require('../models/tags')
var express = require('express')
var app = express()

//get all the tags defined in the api
app.route('/tags')
    .get((req, res) => {
        Tag.findAll().then(function (tag) {
            res.status(201).json({tag})
        })
        .catch(error => {
            res.status(404).json({message:'Not Found'})
        }) 
    });
module.exports=app