console.log("Hello");

const express = require('express');

const App = express();

App.get('/', (req, res)=>{
    res.send('hello Node!');
})
App.get('/api/main', (req, res)=>{
    res.send('Howdy!');
})


App.listen(9000,()=>{
    console.log('Welcome to my server!');
})