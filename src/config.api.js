const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/';


const queriePokeData = () => {
   return axios.get(`${BASE_URL}pokemon?limit=151&offset=200`)
  .then(function (response) {
    // handle success
    return response.data.results;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

const queriePokeByName = (pokemonName) => {
    return axios.get(`${BASE_URL}pokemon/${pokemonName}`)
   .then(function (response) {
     // handle success
     return response.data
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   })
 };

module.exports = {
    queriePokeData,
    queriePokeByName
};
