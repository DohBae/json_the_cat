const request = require('request');

const fetchBreedDescription = function(breed, myCBFxn) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      myCBFxn(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0)  {
      myCBFxn("Breed not found.", null);
    } else {
      let description = data[0].description;
      myCBFxn(null, description);
    }
  });
};

module.exports = {fetchBreedDescription};




