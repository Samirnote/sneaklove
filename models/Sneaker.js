const {model, Schema } = require('mongoose')

const sneakerSchema = new Schema ({
    name: String,
    ref: String,
    size: String,
    description: String,
    price: Number,
    category: {type : String, enum:  ["men", "women", "kids"]},
    id_tags: { type: Schema.Types.ObjectId, ref:"Tag" }
    
})

const SneakerModel  = model('Sneaker', sneakerSchema);

module.exports = SneakerModel;