const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

const data = [
    {
        name: "cool carrot",
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


const dinos = [
    {
        name: "triceretops",
        colour: "orange"
    },
    {
        name: "swagceratops",
        colour: "green"
    },
    {
        name: "billosaurus",
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

// set up the route for the vegetable page
// req is short for request
// res is short for response
app.get('/vegetables', (req, res) => {
    res.send(data)
})

app.get('/dinos', (req, res) => {
    res.send(dinos)
})

// Get the route for /contact and show an h1 saying wellcome to contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1>')
})


app.listen(port, () => {
    console.log(`Our app is running on port ${port}`)
})

// Activity:
// Backend:

// Create an array filled with objects.
// Add in 3 dinosaurs, have an image url and a name.

// Create a route which is "/dinosaurs". Send
// the dinosaur data to that route as a response.

// In the front endpointURL, show the dinos using an AJAX request.