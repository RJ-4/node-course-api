const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect with TodoApp database!!!');
    }
    console.log('Connected to TodoApp database.');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        'taskNo': 4,
        'Description': 'Go to sleep at 00:00.'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert data into Todos collection!!!');
        }
        console.log('Document added to Todos collection!!!');
    });
});