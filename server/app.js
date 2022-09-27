const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./routes/productRouter');
const employeeRouter = require('./routes/employeeRouter');


const app = express();

app.use(cors());
app.use(express.json()); //req.body = {}

app.use('/products', productRouter);
app.use('/employees', employeeRouter);

app.use((req, res, next) => {
    res.status(404).send({ error: 'API NOT SUPPORTED' });
});

app.use((err, req, res, next) => {
    res.status(500).send({error: err.message});
});

// shopping is database name and colletion is product
mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')
    .then(() => {
        
        app.listen(3000);
        console.log('**********************Am on port 3000 listening.....*****')
    });

