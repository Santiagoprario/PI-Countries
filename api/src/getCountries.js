const axios = require('axios')

const getCountries = function (model) {
  let countryList; // En esta variable guardaremos todos los paises de la API externa.
  return axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      countryList = response.data.map((c) => {
        return {
          idCountry: c.alpha3Code,
          name: c.name,
          flag: c.flag,
          continent: c.region,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population,
        };
      });
      return countryList;
    })
    .then((countryList) => {
      return model.bulkCreate(countryList); // Con la funcion bulkCreate podemos insertar lo recibido de la API sin tener que hacerlo uno por uno.
    });
}

module.exports = { getCountries };