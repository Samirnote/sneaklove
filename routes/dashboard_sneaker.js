const express = require("express"); // import express in this module
///const { get } = require("mongoose");
const router = new express.Router(); // create an app sub-module (router)
const SneakerModel = require('../models/Sneaker');


router.get('/prod-add', (req, res, next)=>{
    res.render('products_add')
});


module.exports = router;
