const request = require('request');
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Error: ', error);
  } else if (data.length === 0)  {
    console.log("There has been an error. Please try again.");
  } else {
    let description = data[0].description;
    console.log(description);
  }
});










/*
A little more scaffolding would have been helpful while working on the assignment. I really struggled with the last part and trying to have a user type in just the cat name to find a breed description.

*/