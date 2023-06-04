import makeRequest from './utils/makeRequest';

const endpoint = 'http://data.gov.rs/api/1/datasets/covid-19-dnevni-izveshtaj-o-epidemioloshkoj-situatsiji-u-republitsi-srbiji/';

const keysMapper = {
  'BROJ_LICA_NA_RESPIRATORU_ZA_DATI_DATUM': 'respiratorForDate',
  'BROJ_HOSPITALIZOVANIH_LICA_ZA_DATI_DATUM': 'hospitalizedForDate',
  'BROJ_POZITIVNIH_LICA_ZA_DATI_DATUM': 'positiveForDate',
  'BROJ_TESTIRANIH_LICA_ZA_DATI_DATUM': 'testedForDate',
  'BROJ_PREMINULIH_LICA_ZA_DATI_DATUM': 'deathsForDate',
  'BROJ_LICA_NA_RESPIRATORU_ZA_DATI_DATUM': 'onRespiratorForDate',

  'PROCENAT_ZARAŽENIH_LICA_ U_ODNOSU_NA_BROJ_TESTIRANIH_LICA_ZA_DATI DATUM': 'percentOfInfectedComparedWithTestedForDate',
  'PROCENAT_ZARAŽENIH_LICA_OD_POČETKA_PANDEMIJE_U_ODNOSU_NA_UKUPAN_BROJ_TESTIRANIH_LICA': 'percentOfInfectedSumComparedWithTestedSum',
  'PROCENAT_HOSPITALIZOVANIH_LICA_U ODNOSU_NA_UKUPAN_BROJ_ZARAŽENIH_ZA_DATI_DATUM': 'percentOfHospitalizedComparedWithInfectedSumForDate',
  'PROCENAT_LICA_NA_RESPIRATORU_U_ODNOSU_NA_UKUPAN_BROJ_HOSPITALIZOVANIH': 'percentOnRespiratorComparedWithHospitalizedForDate',

  'UKUPAN_BROJ_PREMINULIH_LICA_OD_POČETKA_PANDEMIJE': 'sumDeaths',
  'UKUPAN_BROJ_TESTIRANIH_LICA_OD_POČETKA_PANDEMIJE': 'sumTested',
  'UKUPAN_BROJ_POZITIVNIH_LICA_OD_POČETKA_PANDEMIJE': 'sumPositive',

};

async function getSummary() {
  const urlObtainer = await makeRequest(endpoint);
  const txtFileURL = urlObtainer.resources[1].url;
  
  if (!txtFileURL) {
    return null;
  }
  const txt = await makeRequest(txtFileURL);
  const fileContent = txt.split('\r\n');
  if (!fileContent) return null;

  const fetchTime = new Date().getTime();
  
  const result = {
    fetchTime,
    data: [],
  };
  
  const createRecord = ([code, countryCode, day, month, year, value, description]) => ({ code, countryCode, date: `${year}-${month}-${day}`, value: value.length ? Number(value) : null, description })
  
  fileContent.forEach((row, i) => {
    if (i === 0) {
      return;
    }
    result.data.push(createRecord(row.split(',')));
  })

  const dataByCategory = {
    daily: {},
    monthly: {},
  };
  let sumHospitalized = 0;
  result.data.forEach((x, i) => {
    const d = new Date(x.date);
    const isLastRecord = result.data.length - 1 === i;
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const day = d.getDate();
    const lastDay = isLastRecord ? day : new Date(y, m, 0).getDate();

    if (keysMapper[x.description]) {

      dataByCategory.daily[x.date] = {
        ...dataByCategory.daily[x.date],
        date: x.date,
        [keysMapper[x.description]]: x.value
      };
      if (x.description === 'BROJ_HOSPITALIZOVANIH_LICA_ZA_DATI_DATUM') {
        sumHospitalized += x.value;
        dataByCategory.daily[x.date].sumHospitalized = sumHospitalized;
      }
    }

    if (day === lastDay) {
      if (keysMapper[x.description]) {
        dataByCategory.monthly[x.date] = dataByCategory.daily[x.date];
      }
      // if (x.description === 'BROJ_HOSPITALIZOVANIH_LICA_ZA_DATI_DATUM') {
      //   sumHospitalized = 0;
      // }
    }
  })

  const d = Date.now();

  return {
    daily: {
      fetchTime: d,
      data: dataByCategory.daily,
    },
    monthly: {
      fetchTime: d,
      data: dataByCategory.monthly,
    }
  }
}

export default getSummary;