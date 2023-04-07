const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    sources: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    thumb: {
        type: String,
    }
}, {timestamps: true});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;