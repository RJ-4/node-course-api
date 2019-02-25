const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    const db = client.db('TodoApp');
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to fetch data!!!', err);
    // });

    // db.collection('Todos').find({
    //     'taskNo': 1
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to fetch document!!!', err);
    // });

    db.collection('Todos').find({
        '_id': new ObjectId("5c73c384e0b06d03e46d816c")
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch document!!!');
    });
});