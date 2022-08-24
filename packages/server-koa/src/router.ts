import test from "./controller/test";
import mongo from "./controller/mongo";
import weather from './controller/widget-notion/weather';
export default {
  "/abc": test,
  "/mongo": mongo,
  "/weather": weather,
};
