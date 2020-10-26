
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {

    res.json(data);

});

app.post('/newPerson', function(req, res) {

    console.log(req.body)

    const newPerson = req.body;

    data.push(newPerson);

    res.json({
        "status": "ok"
    });
})

app.delete('/delete/:id', function(req, res) {

    const id = req.params.id; // id is the array Position, now I want to remove that element from the array...

    if (data[id]){
        data.splice(id, 1);
        res.json({
            "status": "deleted"
        });
    } else {
        res.json({
            "status": "error"
        });
    }
    
})

app.put('/update/:id', function(req, res) {

    const id = req.params.id; // id is the array Position, now I want to remove that element from the array...

    if (data[id]){

        data.id = req.body;
        res.json({
            "status": "updated"
        });
    } else {
        res.json({
            "status": "error"
        });
    }
    
})

app.listen(port, function() {
    console.log(`Running on http://localhost:${port}`);
});