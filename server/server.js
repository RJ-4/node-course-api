const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {Character} = require('./models/character');
const {User} = require('./models/user');

const {ObjectID} = require('mongodb');
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

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404)
            .send();
    }
    Todo.findById(id)
        .then((result) => {
            if(!result) {
                res.status(404).send();
            }
            res.send({result});
        })
        .catch((e) => {
            res.status(400)
                .send();
        });
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    // Todo.remove({
    //     _id: id
    // })
    
    // Todo.findOneAndRemove({
    //     _id: id
    // })

    Todo.findByIdAndRemove(id)
        .then((result) => {
            if(!result) {
                res.status(404).send();
            }
            res.send({result});
        })
        .catch((e) => {
            res.status(400).send();
        });
});

app.listen(3000, () => {
    console.log('Server satrted at port 3000.')
});