import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async (url) => {

    try{
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        const data = { confirmed, recovered, deaths, lastUpdate};

        return data;
    } catch(error) {
        console.error(error);
    }
}

export const fetchGlobalData = async () => fetchData(url);

export const fetchCountryData = async (country) => fetchData(`${url}/countries/${country}`)
