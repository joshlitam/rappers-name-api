const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthname': 'Shia Lebouf',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthname': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthname': 'Unknown',
        'birthLocation': 'Unknown'
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/api/:name", (req, res) => {
    const rappersName = req.params.name.toLowerCase()
    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is now running at port ${PORT}! Betta go catch it!`)
})