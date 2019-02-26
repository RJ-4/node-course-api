const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/CharacterApp');

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

const newCharacter = new Character({
    name: 'Mira',
    age: 27,
    isActive: true
});

newCharacter.save()
            .then((result) => {
                console.log(JSON.stringify(result, undefined, 2))
            })
            .catch((err) => {
                console.log('Unable to add document to collection!!!', err);
            });