import { Item } from "../models";
var items = require('./items.json')

const itemService = {
  getItems: (): Item[] => {
    return items;
  },
}

export { itemService }