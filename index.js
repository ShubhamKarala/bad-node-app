require('dotenv').config()
const express = require('express');
const path =require('path');
const bodyParser = require('body-parser')


const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('API Homepage!')
})

app.get('/CSVs/Certificates/:template_name/:mail/:filename', (req, res) => {
    var filePath = req.baseUrl + req.path
    res.download(filePath);
})

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'http://127.0.0.1';

app.listen(PORT, HOST, () => console.log(`Server Running on: ${HOST}:${PORT}`));

app.locals.env = process.env;