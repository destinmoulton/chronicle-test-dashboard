/**
 * Get data from the swapi.io api
 */

const ENDPOINTS = ["people", "planets", "starships", "species", "vehicles"];
const URL = "https://swapi.co/api/";
const HEADERS = {
    Origin: "https://swapi.co"
};

const getAllSwapiData = () => {
    const promises = ENDPOINTS.map(path => {
        const params = {
            headers: HEADERS
        };
        return fetch(URL + path, params)
            .then(res => {
                return res.json();
            })
            .then(data => {
                return { name: path, data: data.results };
            });
    });

    return Promise.all(promises);
};

export { getAllSwapiData };
