const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

const id = "5c74db425a5e87256cd3959b";

// Todo.find().then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// }).catch((err) => {
//     console.log('Unable to fetch documents ', err);
// });

// Todo.findOne({
//     _id: id
// }).then((result) => {
//     console.log(result, undefined, 2);
// }). catch((err) => {
//     console.log('Unable to fetch document from collection. ', err);
// });

Todo.findById(id)
    .then((result) => {
        if(!result) {
            return console.log('No such document exists');
        }
        console.log(JSON.stringify(result, undefined, 2));
    })
    .catch((err) => {
        console.log('Unable to fetch document from the collection. ', err)
    });