const {model, Schema } = require('mongoose')

const tagSchema = new Schema ({
    nabel: String,

})

const TagModel  = model('Tag', tagSchema);

module.exports = TagModel;