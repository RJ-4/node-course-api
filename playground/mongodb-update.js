const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.!!!');
    }
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({
        "taskNo" : 3
    }, {
        $set: {
            "Description": "Have dinner"
        }
        // $inc : {
        //     "taskNo": 1
        // }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    client.close();
});