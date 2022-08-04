const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

const data = [
    {
        name: "carrot",
        colour: "orange"
    },
    {
        name: "broccoli",
        colour: "green"
    },
    {
        name: "yam",
        colour: "red"
    }
]

// set up a route
// set it up for the root which is a slash
app.get('/', (req, res) => {
    console.log("hello");
    res.send(`
    <h1>Hello World</h1>
    <a href="/vegetables">view vegetables</a>
    `)
})

// set up the route for the about page
app.get('/vegetables', (req, res) => {
    res.send(data)
})

// Get the route for /contact and show an h1 saying wellcome to contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>')
})


app.listen(port, () => {
    console.log(`Our app is running on port ${port}`)
})

