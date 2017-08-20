import items from '../data/items'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function delay(msDelay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, msDelay)
  })
}

export default {
  _items: items.slice(0),
  _idCounter: items.length,

  _randomError() {
    if (getRandomInt(0, 4) === 0) {
      // 25% chance of failure
      throw new Error("API network error")
    }
  },

  async _randomDelay() {
    await delay(getRandomInt(1000, 2000))
  },

  // POST /items
  // { text: 'Item 1' }
  //
  // Response:
  // Location: /items/1
  async addItem(data) {
    await this._randomDelay()
    // this._randomError()

    this._idCounter++
    const newId = this._idCounter
    this._items.push({
      ...data,
      id: newId
    })
    return newId
    // Returns promise which contains newId
  },

  // GET /items
  //
  // Response:
  // [ { id: 1, text: 'Item 1' }, ... ]
  async getItems() {
    await this._randomDelay()
    return this._items.slice(0)
  },

  async deleteItem(id) {
    await this._randomDelay()
    this._items = this._items.filter(item => item.id !== id)
  },

  // editItem(1, { text: "New Text", anotherField: 111 })
  async editItem(id, newData) {
    await this._randomDelay()
    this._items = this._items.map(item => {
      if (item.id === id) {
        return { ...item, ...newData }  // equal to Object.assign({}, item, newData)
      } else {
        return item // Do nothing
      }
    })
  }
}