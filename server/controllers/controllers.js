var mongoose = require('mongoose');
require('../models/models.js');

const Weather = mongoose.model('Weather');


module.exports={
    index: (req, res) => {
        res.render('index');
    },
}