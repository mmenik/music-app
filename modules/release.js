var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Label = require('./label');

var schema = new Schema({
    title: { type: String, required: true },
    catalog: { type: String, required: true },
    label: { type: Schema.Types.ObjectId, ref: 'Label' }
});

schema.post('remove', function (release) {
    Label.findById(release.label, function (err, label) {
        label.releases.pull(release);
        label.save();
    });
});

module.exports = mongoose.model('Release', schema);