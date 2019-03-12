const Twitter = require('twitter');
const request = require('request');

const url = 'https://api.chucknorris.io/jokes/random';

var client = new Twitter({
    consumer_key: 'YOUR COSTUMER KEY',
    consumer_secret: 'YOUR COSTUMER SECRET',
    access_token_key: 'YOUR ACCESS TOKEN KEY',
    access_token_secret: 'YOUR ACCESS TOKEN SECRET'
});

setInterval(() => {
    request({url: url, json: true}, (error, response) => {
        const message = response.body.value;
        client.post('statuses/update', {status: message},  function(error, tweet, response) {
            if(error) throw error;

            console.log('Sending random Chuck Norris tweet...');
        });
    });
}, 10000);
