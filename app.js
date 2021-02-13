const express = require('express');
const bodyParser = require("body-parser");

const db = require('./model/mongoose')
const cors = require('cors')
const path = require('path')
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
const port = 3001
app.listen(port, () => console.log(`app listening on port ${port}!`))



