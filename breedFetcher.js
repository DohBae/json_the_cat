const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2); 

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  let description = data[0].description;

  if (error) {
    console.log('error');
  } else {
    console.log(description);
  }
})