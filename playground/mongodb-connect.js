const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server!!!');
    }
    console.log('Connected to TodoApp database.');
    
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     'taskNo': 4,
    //     'Description': 'Go to sleep at 00:00.'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert data into Todos collection!!!');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        'name': "Ace Ackerman",
        "age": 22,
        "location": "Antiva"
    }, (err, result) => {
        if(err) {
            return console.log('Unable to add document to colletion Users. ', err);
        }
        console.log(result.ops, undefined, 2);
    });

    client.close();
});