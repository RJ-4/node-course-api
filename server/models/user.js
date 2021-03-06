const mongoose = require('mongoose');

const User = mongoose.model('users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

mongoose.exports = {User};