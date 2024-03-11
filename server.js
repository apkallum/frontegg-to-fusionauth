const express = require('express');
const bodyParser = require('body-parser')

const { getUser, authUser, getUsers } = require('./frontegg')


const app = express();
const port = 3000;
const jsonParser = bodyParser.json()

async function printResult() {
    console.log("print")
}


app.post('/', jsonParser, async (req, res) => {
    const results = await authUser(req.body.loginId, req.body.password);
    res.send(JSON.stringify(results, null, 2));
});

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});




