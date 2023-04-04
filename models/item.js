const mongoose = require('mongoose')


const itemSchema = mongoose.Schema({

    //id: { type: Number, required: true },
    title: { type: String, required: true},
    description : { type: String, required: true},
    price: { type: Number, required: true},
    imageUrl: { type: String, required: true},



})

module.exports = mongoose.model('Item', itemSchema);

