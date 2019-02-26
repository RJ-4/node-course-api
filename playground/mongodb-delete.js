const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    const db = client.db('TodoApp');
    
    // db.collection("Todos").deleteOne({
    //     "Description": "Go to sleep at 00:00."
    // }).then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
    // });

    // db.collection("Todos").findOneAndDelete({
    //     "Description": "Go to sleep at 00:00."
    // }).then((doc) => {
    //     console.log(JSON.stringify(doc, undefined, 2));
    // });

    db.collection("Todos").deleteMany({
        "Description": "Go to sleep at 00:00."
    }).then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    });

    client.close();
});