const mongoose = require('mongoose');

const uri = 'mongodb+srv://rohitjatsau:T1MJ0IK77l2ZMWzr@cluster0.ldtvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
