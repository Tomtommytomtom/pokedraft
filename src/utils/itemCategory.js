export default class Item {
  constructor({ items, name }) {
    this.items = items
    this.name = name
  }

  getItemNames() {
    return this.items.map(item => item.name)
  }
}
