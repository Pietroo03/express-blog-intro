const express = require('express')
const PostsController = require('./Controllers/Postscontroller.js')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Example app listening on ${host}:${port}`)
})

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio Blog!<h1>')
})

app.get('/posts', PostsController.index)