var mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    // name: {type: String, required: [true, "A baker needs a name"], minlength: 3},
    // image: {type: String, required: [true, "A cake can't be rated if we can't see it!"]},
    // comments: [CommentSchema],
}, {timestamps: true});

mongoose.model('Weather', WeatherSchema);
const Weather = mongoose.model('Weather');