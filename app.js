const express = require('express');
const mongoose = require('mongoose');
const app = express();
const itemRoutes = require('./routes/item.js')


mongoose.connect('mongodb+srv://boralex:boris@cluster0.voe8dja.mongodb.net/?retryWrites=true&w=majority', {

    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(()=> console.log('Connexion à MongoDB réussie'))
.catch(()=> console.log('Connexion à MongoDB échouée'));




app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
})

app.use(express.json())
app.use('/api/items', itemRoutes)



module.exports = app