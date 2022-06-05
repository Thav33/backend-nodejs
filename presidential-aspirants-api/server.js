const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;

app.use(cors())

// presidential aspirants object
const presidentialAspirants = {
    'osinbajo': {
        fullname: 'Yemi Osinbajo',
        dob: '8 March 1957',
        origin: 'Lagos State',
        party: 'All Progressives Congress (APC)',
        currentPosition: 'Vice President'
    },
    'atiku': {
        fullname: 'Atiku Abubakar',
        dob: '8 March 1957',
        origin: 'Lagos State',
        party: 'People\'s Democratic Party (PDP)',
        currentPosition: 'Grand Commander (GCON)'
    },
    'obi': {
        fullname: 'Peter Obi',
        dob: '19 July 1961',
        origin: 'Anambra State',
        party: 'Labour Party (LP)',
        currentPosition: 'Commander (CON)'
    },
    'tinubu': {
        fullname: 'Bola Tinunu',
        dob: ' 29 March 1952',
        origin: 'Osun State',
        party: 'All Progressives Congress (APC)',
        currentPosition: 'Chief'
    },
    'saraki': {
        fullname: 'Bukola Saraki',
        dob: '19 December 1962',
        origin: 'Kwara State',
        party: 'People\'s Democratic Party (PDP)',
        currentPosition: 'Commander (CON)'
    },
    'wike': {
        fullname: 'Nyesom Wike',
        dob: '13 December 1963',
        origin: 'River State',
        party: 'People\'s Democratic Party (PDP)',
        currentPosition: 'Commander (CON)'
    },
    'unknown': {
        fullname: 'unknown',
        dob: 'unknown',
        origin: 'unknown',
        party: 'unknown',
        currentPosition: 'unknown'
    },
}
//--- end presidential aspirants object

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//when user makes '/api request', respond with the objects
app.get('/api', (req, res) => {
    res.json(presidentialAspirants)
})

//when user makes '/api/aspirants' request, respond with object of the requested param
app.get('/api/:aspirant', (req, res) => {
    const aspirantDetail = req.params.aspirant.toLowerCase();

//condition to check if an aspirant request exist. if true, respond with aspirant details else respond with 'unknown'
    (presidentialAspirants[aspirantDetail]) ? res.json(presidentialAspirants[aspirantDetail]) : res.json(presidentialAspirants['unknown']);

    // console.log(presidentialAspirants[req.params.aspirant])
})

app.listen(PORT, () => {
    console.log(`PRESIDENTIAL ASPIRANTS API SERVER IS RUNNING ON PORT ${PORT}.`)
})
