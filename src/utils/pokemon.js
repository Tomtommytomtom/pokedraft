import { convertRgbToRgbAlpha } from './colorStringOperations'

export default class Pokemon {
  constructor({ name, id, stats, abilities, sprites, types }) {
    this.name = name
    this.id = id
    this.statInfo = stats
    this.abilities = abilities
    this.sprites = sprites
    this.types = types
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
      abilities.push(ability.ability.name)
    })
    return abilities
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
    return this.sprites.front_default
  }

  getMainType() {
    if (this.types.length > 1) {
      return this.types[1].type.name
    } else {
      return this.types[0].type.name
    }
  }

  getSecondaryType() {
    return this.types[0].type.name
  }

  getColorForType(alpha) {
    return convertRgbToRgbAlpha(TYPE_STRING_COLOR[this.getMainType()], alpha)
  }

  getStatOrderedArray() {
    return statOrder.map(stat => this.getStatsObject()[stat])
  }

  getStatLabels() {
    return statOrder.map(stat => statStrings[stat])
  }

  getNameLabel() {
    const name = this.name
    return name.toUpperCase()
  }
}

const TYPE_STRING_COLOR = {
  normal: 'rgb(170,170,153)',
  fire: 'rgb(255,68,34)',
  water: 'rgb(51,153,255)',
  electric: 'rgb(255,204,51)',
  grass: 'rgb(119,204,85)',
  ice: 'rgb(102,204,255)',
  fighting: 'rgb(187,85,68)',
  poison: 'rgb(170,85,153)',
  ground: 'rgb(221,187,85)',
  flying: 'rgb(136,153,255)',
  psychic: 'rgb(255,85,153)',
  bug: 'rgb(170,187,34)',
  rock: 'rgb(187,170,102)',
  ghost: 'rgb(102,102,187)',
  dragon: 'rgb(119,102,238)',
  dark: 'rgb(119,85,68)',
  steel: 'rgb(170,170,187)',
  fairy: 'rgb(238,153,238)'
}

const statStrings = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SPATK',
  'special-defense': 'SPDEF',
  speed: 'SPEED'
}

const statOrder = [
  'hp',
  'attack',
  'defense',
  'speed',
  'special-defense',
  'special-attack'
]
