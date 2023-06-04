import makeRequest from './utils/makeRequest';

import data from "./data";

// const addLeadingZero = (str) => `00${str}`.slice(-2);

async function getAirQuality() {
  const date = new Date();
  const dateTimeString = date.toString().slice(0, date.length -1);
  console.log(dateTimeString, date)
  const endpoint = `http://data.sepa.gov.rs/api/3/action/datastore_search?resource_id=${data.airQualityId}&q=${dateTimeString}&filters={%22component_id%22:${data.componentId}}`;

  const response = await makeRequest(endpoint);
  if (!response) {
    return null;
  }
  const recordsMap = {};
  const records = [];
  response.result.records.forEach(({ station_id, value }) => {
    if(!recordsMap[station_id]){
      records.push({
        station: data.stations.find(x => x.id === station_id),
        value,
      });
      recordsMap[station_id] = true;
    }
  });

  const fetchTime = date.getTime();
  const result = {
    fetchTime,
    data: records.filter(x => x.station),
  };
  return result;
}

export default getAirQuality;