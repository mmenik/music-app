var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required=true },
    releases: [{ type: Schema.Types.ObjectId, ref: 'Release' }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Label', scheda);