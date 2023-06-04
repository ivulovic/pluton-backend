import getSummary from "./getSummary";
import getAmbulances from "./getAmbulances";
import getAirQuality from "./getAirQuality";
import writeFile from "./utils/writeFile";

async function init() {
  console.log("Fetching fresh data", new Date());
  const summary = await getSummary();
  if (summary) {
    if (summary.daily) {
      writeFile("./data/dailySummary.json", summary.daily);
    }
    if (summary.monthly) {
      writeFile("./data/monthlySummary.json", summary.monthly);
    }
  }
  const ambulances = await getAmbulances();
  if (ambulances) {
    writeFile("./data/ambulances.json", ambulances);
  }
  const airQuality = await getAirQuality();
  if (airQuality && airQuality.data && airQuality.data.length) {
    writeFile("./data/airQuality.json", airQuality);
  }
}

init();
