const {model, Schema } = require('mongoose')

const tagSchema = new Schema ({
    label: String,
})

const TagModel  = model('Tag', tagSchema);

module.exports = TagModel;