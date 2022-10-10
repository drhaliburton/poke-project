import { Item } from "../models";
var items = require('../../db/items.json')

const itemService = {
  getItems: (): Item[] => {
    return items;
  },
}

export { itemService }