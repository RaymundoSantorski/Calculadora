const fs = require('fs');
const { stringify } = require('querystring');


const getLast = () => {
    try {
        let value = require('./lastRes.json').value;
        return value;
    } catch (err) {
        return 0;
    }
}

const save = async(value) => {
    let obj = {
        value
    }
    let data = JSON.stringify(obj);
    fs.writeFile('lastRes.json', data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    save,
    getLast
}