'use strict';

const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('www'));

app.get('/', (req, res) => {
    let data = loadData();
    res.render('index', {data: data});
});

app.get('/data', (req, res) => {
    // Load data files
    let data = loadData();
    res.send(data);

});

const server = app.listen(8080, function () {
    console.log('server running');
});

const loadData = function () {
    const dat =
        ['AllRounders', 'FirstPlaceInCourse', 'StudentEntriesBySex', 'TopAchieversInCourse', 'Candidature']
            .reduce((acc, fileName) => {
                let fileSt = fs.readFileSync(`data/${fileName}.json`, {encoding: 'utf8'});
                acc[fileName] = JSON.parse(fileSt);

                return acc;
            }, {});

    return dat;
};