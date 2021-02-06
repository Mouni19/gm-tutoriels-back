const express = require('express');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    const date = new Date().toLocaleString()
    res.send(date)
})

app.listen(port, () => console.log('app listening on port 3001'))
