const express = require('express');
const app = express();
 
app.get('/', (req, res) => { res.send('Hello World')});
 
app.listen(3000);
console.log('started express demo at localhost:3000');