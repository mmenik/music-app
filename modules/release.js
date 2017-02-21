var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required=true },
    catalog: { type: String, required=true },
    label: { type: Schema.Types.ObjectId, ref: 'Label' }
});

module.exports = mongoose.model('Release', scheda);