const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/UserApp');

const User = mongoose.model('users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: ' ace@nova.com  '
});

newUser.save()
       .then((doc) => {
           console.log(JSON.stringify(doc, undefined, 2));
       })
       .catch((err) => {
           console.log('Unable to save document', err);
       });