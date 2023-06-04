import express from 'express';
import OpenSourceController from "../controllers/open-source.controller";

const router = express.Router();

router.get('/air-quality', OpenSourceController.getAirQuality);
router.get('/covid-19-ambulances', OpenSourceController.getCovid19DailyAmbulances);
router.get('/covid-19-daily-statistic', OpenSourceController.getCovid19DailyStatistic);
router.get('/covid-19-monthly-statistic', OpenSourceController.getCovid19MonthlyStatistic);

export default router;
