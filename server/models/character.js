const mongoose = require('mongoose');

const Character = mongoose.model('characters', {
    name: {
        type: String
    }, 
    age : {
        type: Number
    }, 
    isActive: {
        type: Boolean
    }
});

module.exports = {Character};