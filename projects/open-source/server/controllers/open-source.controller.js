import Config from "../config";

const Covid19Controller = {
  getAirQuality: async (req, res) => {
    try {
      res.sendFile(Config.OPEN_SOURCE_STATIC_LOCATION+'/airQuality.json');
    } catch (e) {
      res.status(500);
    }
  },
  getCovid19DailyStatistic: async (req, res) => {
    try {
      res.sendFile(Config.OPEN_SOURCE_STATIC_LOCATION+'/dailySummary.json');
    } catch (e) {
      res.status(500);
    }
  },
  getCovid19MonthlyStatistic: async (req, res) => {
    try {
      res.sendFile(Config.OPEN_SOURCE_STATIC_LOCATION+'/monthlySummary.json');
    } catch (e) {
      console.log("error", e);
      res.status(500);
    }
  },
  getCovid19DailyAmbulances: async (req, res) => {
    try {
      res.sendFile(Config.OPEN_SOURCE_STATIC_LOCATION+'/ambulances.json');
    } catch (e) {
      res.send(500);
    }
  },
};

export default Covid19Controller;
