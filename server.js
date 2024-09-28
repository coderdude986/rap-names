const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {'age': 30,
    'bname': 'Sheyaa bin Abraham',
    'blocation': 'London'},

    'chance' : {'age': 29,
    'bname': 'chancellor',
    'blocation': 'NY'},

    'dylan' : {'age': 28,
    'bname': 'Dylan',
    'blocation': 'Dylan'},
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
    const rapperrName = req.params.rapperName.toLowerCase()
    if (rappers[rapperrName]){
        res.json(rappers[rapperrName])
    }
    else{
        res.json(rappers['dylan'])
    }
    // res.json(rappers)
})

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})


