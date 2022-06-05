const express = require('express');
const app = express();
const PORT = 5000;

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
}
//--- end presidential aspirants object

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//when user makes '/api request', respond with the objects
app.get('/api', (req, res) => {
    res.json(presidentialAspirants)
})


app.listen(PORT, () => {
    console.log(`PRESIDENTIAL ASPIRANTS API SERVER IS RUNNING ON PORT ${PORT}.`)
})
