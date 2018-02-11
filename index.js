const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Send static files
app.use(express.static(__dirname + '/client/dist'));


app.get('/api/test', (req, res) => {
    res.send({test: "testing"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});