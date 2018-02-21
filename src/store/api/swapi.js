/**
 * Get data from the swapi.io api
 */

const ENDPOINTS = ["people", "planets", "starships", "species", "vehicles"];
const URL = "https://swapi.co/api/";
const HEADERS = {
    Origin: "https://swapi.co",
    "content-type": "application/json"
};

const getAllSwapiData = () => {
    const promises = ENDPOINTS.map(path => {
        const params = {
            //mode: "no-cors",
            headers: HEADERS
        };
        return fetch(URL + path, params)
            .then(res => {
                return res.json();
            })
            .then(data => {
                return { name: path, data: data.results };
            })
            .catch(err => {
                console.error(err);
            });
    });

    return Promise.all(promises);
};

export { getAllSwapiData };
