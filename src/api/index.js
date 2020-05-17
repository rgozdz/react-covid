import axios from "axios";

const url = "https://covid19.mathdro.id/api";

const fetchData = async (url) => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const data = { confirmed, recovered, deaths, lastUpdate };

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchGlobalData = async () => fetchData(url);

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountryData = async (country) =>
  fetchData(`${url}/countries/${country}`);
