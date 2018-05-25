const express = require('express');
const bc = require('./server/books_controller');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use( express.static( path.join(__dirname, "build") ) );

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(3000, () => {
    console.log('listening on port 3000')
})