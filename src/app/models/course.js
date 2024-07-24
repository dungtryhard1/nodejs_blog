const mongoose= require("mongoose");
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    price: { type: Number },
    description: { type: String, maxLength: 600 },
    video: { type: String, required: true },
    level: { type: String },
    thumbnail: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);