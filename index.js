let express = require('express');

let app = express();

app.get('/endpoint', (req, resp)=>{
    resp.send('<h1>Hello World</h1>')
});

app.listen(3000, ()=>{
    console.log('This app is running')
});

