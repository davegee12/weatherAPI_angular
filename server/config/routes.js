var Weather = require('../controllers/controllers.js');

module.exports = function(app){
    app.get('/weather', (req, res) => {
        Weather.index(req, res);
    })
}