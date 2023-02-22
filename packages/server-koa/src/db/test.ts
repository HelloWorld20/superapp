import Mongo from '../utils/mongodb'

const model = {
  age: Number,
  name: String
};
const COLLECTION = 'people';

const db_test = new Mongo(COLLECTION, model);

export const find = (condition: any) => {
  return db_test.find(condition);
}

export const insert = (value: any) => {
  return db_test.insert(value)
}

export default { find, insert }