const express = require('express')
const app = express()
const port = 3000;

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/slider', (req, res) => {
    res.sendFile(__dirname + '/ImgSlider/slider.html');
})

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
})