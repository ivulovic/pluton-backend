import makeRequest from './utils/makeRequest';

const endpoint = 'https://covid19.data.gov.rs/api/datasets/ambulances';

async function getAmbulances() {
  const fileContent = await makeRequest(endpoint);
  if (!fileContent) {
    return null;
  }
  const fetchTime = new Date().getTime();
  const result = {
    fetchTime,
    data: fileContent,
  };
  return result;
}

export default getAmbulances;