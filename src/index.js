const express = require('express')
const methodOverride = require('method-override');

const app = express()
const port = 3001

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

var lastReq;

// Get post request data
app.post('/post', (req, res) => {
    // var currentdate = new Date();
    // var datetime = "Last Sync: " + currentdate.getDate() + "/"
    //     + (currentdate.getMonth() + 1) + "/"
    //     + currentdate.getFullYear() + " @ "
    //     + currentdate.getHours() + ":"
    //     + currentdate.getMinutes() + ":"
    //     + currentdate.getSeconds();
    
    // console.log(datetime);
    lastReq = req.body;
    // console.log(req.body);
    res.json(req.body);
});

// Get last post request data
app.get('/last', (req, res) => {
    res.json(lastReq);
});

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
