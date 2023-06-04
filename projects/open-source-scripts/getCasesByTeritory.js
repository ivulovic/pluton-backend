import makeRequest from './utils/makeRequest';

const endpoint = 'https://data.gov.rs/api/1/datasets/covid-19-dnevni-izveshtaj-o-obaveznoj-samoizolatsiji-na-teritoriji-republike-srbije/';

async function getCasesByTeritory() {
  const txtFileURL = await makeRequest(endpoint).then(res => JSON.parse(res)).then(res => res.resources[0].url).catch(err => null);
  if (!txtFileURL) {
    return null;
  }
  const fileContent = await makeRequest(txtFileURL).then(txt => txt.split('\r\n'));
  if (!fileContent) return null;
  const fetchTime = new Date().getTime();
  const result = {
    fetchTime,
    data: [],
  };
  const createRecord = ([code, territory, territoryId, day, month, year, value, description]) => ({ code, territory, territoryId, date: `${year}-${month}-${day}`, value: value.length ? Number(value) : null, description })
  fileContent.forEach((row, i) => {
    if (i === 0) {
      return;
    }
    result.data.push(createRecord(row.split(',')));
  })
  return result;
}

export default getCasesByTeritory;