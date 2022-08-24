import test from "./controller/test";
import mongo from "./controller/mongo";
import weather from './controller/widget-notion/weather';
import nursingHospital from './controller/spider/nursing-hospital'
export default {
  "/abc": test,
  "/mongo": mongo,
  "/weather": weather,
  "/spider/nursing-hospital": nursingHospital
};
