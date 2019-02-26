const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {Character} = require('./models/character');
const {User} = require('./models/user');

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let newTodo = new Todo({
        taskNo: req.body.taskNo,
        Description: req.body.Description
    });

    newTodo.save()
            .then((result) => {
                console.log(JSON.stringify(result, undefined, 2));
                res.send(result);
            })
            .catch((err) => {
                console.log('Unable to save document', err);
                res.status(400).send(err);
            });
});

app.get('/todos', (req, res) => {
    Todo.find()
        .then((result) => {
            res.send({result});
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

app.listen(3000, () => {
    console.log('Server satrted at port 3000.')
});