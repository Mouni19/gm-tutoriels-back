const express = require('express');
const path = require('path');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/test.html'));
})

app.listen(port, () => console.log('app listening on port 3001'))
