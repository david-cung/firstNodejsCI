const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send('execellent')
})
app.listen(3000, () => {
    console.log('server is startinggg221222222gggdddddd');
})