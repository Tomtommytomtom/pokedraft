export default class Pokemon {
  constructor({ name, id, stats, abilities, sprites }) {
    this.name = name
    this.id = id
    this.statInfo = stats
    this.abilities = abilities
    this.sprites = sprites
  }

  getStatsObject() {
    //returns {hp: number, attack: number, special-attack: number...}
    let stats = {}
    this.statInfo.forEach(stat => {
      stats[stat.stat.name] = stat.base_stat
    })
    return stats
  }

  getAbilityArray() {
    let abilities = []
    this.abilities.forEach(ability => {
      abilities.push(ability.name)
    })
  }

  getAbilityString() {
    return this.getAbilityArray().join('/')
  }

  getSumOfStats() {
    return Object.values(this.getStatsObject).reduce((acc, curr) => {
      return acc + curr
    }, 0)
  }

  getSprite() {
    console.log(this.sprites.front_default)
    return this.sprites.front_default
  }
}
