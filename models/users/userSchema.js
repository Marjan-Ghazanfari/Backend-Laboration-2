const mongodb = require('mongoose');

const userSchema = mongodb.Schema({
    _id:        mongodb.Schema.Types.ObjectId,
    firstName:  { type: String, required: false, default: '' },
    lastName:   { type: String, required: false, default: '' },
    image:      { type: String, required: false, default: 'https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg' },
    email:      { type: String, required: true, unique: true },
    userHash:   { type: String, required: true },
    
    created:    { type: Date, default: Date.now },
    modifed:    { type: Date, default: Date.now }
})

module.exports = mongodb.model('User', userSchema);