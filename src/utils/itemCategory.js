export default class Item {
  constructor({ items }) {
    console.log(items)
    this.item = getRandomItemOutOfArray(items)
    this.name = this.item.name
  }

  getItemNames() {
    return this.items.map(item => item.name)
  }
}

const getRandomItemOutOfArray = array => {
  const rand = Math.floor(Math.random() * array.length)
  return array[rand]
}
