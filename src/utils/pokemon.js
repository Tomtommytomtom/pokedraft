import { convertRgbToRgbAlpha } from './colorStringOperations'
import Item from './itemCategory'

export default class Pokemon {
  constructor(
    { name, id, stats, abilities, sprites, types, species },
    heldItem
  ) {
    this.name = name
    this.id = id
    this.statInfo = stats
    this.abilities = abilities
    this.sprites = sprites
    this.types = types
    this.heldItem = heldItem && new Item(heldItem)
    this.speciesUrl = species.url
    this.selectedAbility = this.getAbilityArray()[0]
    this.nature = randomNature()
    this.evs = [0, 0, 0, 0, 0, 0]
    this.evolutions = undefined
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
    return Object.values(this.getStatsObject()).reduce((acc, curr) => {
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

  getTier() {
    const sum = this.getSumOfStats()

    if (sum > 600) return 'S'
    else if (sum >= 400) return 'A'
    else return 'B'
  }

  getHeldItemName() {
    return this.heldItem.name
      .split('-')
      .map(name => capFirstChar(name))
      .join(' ')
  }

  toSmogonString() {
    return [
      `${capFirstChar(this.name)} @ ${this.getHeldItemName()}`,
      `Ability: ${capFirstChar(this.selectedAbility, '-')}`,
      `EVs: ${this.getEvString()}`,
      `${capFirstChar(this.nature)} Nature`
    ]
  }

  getEvString() {
    return this.evs
      .map((ev, index) =>
        ev ? `${ev} ${smogonStatStrings[statOrder[index]]}` : ''
      )
      .filter(ev => !!ev)
      .join(' / ')
  }

  addEvolutions(arrayOfPokemon) {
    console.log(arrayOfPokemon)
    if (arrayOfPokemon) {
      this.evolutions = arrayOfPokemon.map(evo => new Pokemon(evo))
    }
  }

  getEvolutions() {
    console.log(this.evolutions)
    return this.evolutions.length !== 1
      ? this.evolutions.filter(evo => evo.name !== this.name)
      : undefined
  }

  hasEvolutions() {
    return !!this.evolutions
  }

  logEvolutionNamesWithIndex() {
    console.log(
      this.evolutions.map((evo, index) => `name: ${evo.name}, index:${index}`)
    )
  }

  evolveTo(pokemon) {
    if (this.evolutions.includes(pokemon) && this.hasEvolutions()) {
      console.log(this)
      const carry = this.getCarryValues()
      Object.assign(this, pokemon, carry)
    }
  }

  getCarryValues() {
    return {
      evs: this.evs,
      nature: this.nature,
      heldItem: this.heldItem,
      evolutions: this.evolutions
    }
  }

  evolveOneStage() {
    const evolutionNames = this.evolutions.map(evo => evo.name)
    const currStage = evolutionNames.indexOf(this.name)
    const max = this.evolutions.length
    console.log(currStage, max)
    this.evolveInto(this.evolutions)
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

const smogonStatStrings = {
  hp: 'HP',
  attack: 'Atk',
  defense: 'Def',
  'special-attack': 'SpA',
  'special-defense': 'SpD',
  speed: 'Spe'
}

const statOrder = [
  'hp',
  'attack',
  'defense',
  'speed',
  'special-defense',
  'special-attack'
]

const natures = [
  'hardy',
  'lonely',
  'brave',
  'adamant',
  'naughty',
  'bold',
  'docile',
  'relaxed',
  'impish',
  'lax',
  'timid',
  'hasty',
  'serious',
  'jolly',
  'naive',
  'modest',
  'mild',
  'quiet',
  'bashful',
  'rash',
  'calm',
  'gentle',
  'sassy',
  'careful',
  'quirky'
]

const randomNature = () => {
  const randIndex = Math.floor(Math.random() * natures.length)
  return natures[randIndex]
}

const capFirstChar = (string, split = ' ') => {
  const strings = string.split(split)
  return strings
    .map(string => string.charAt(0).toUpperCase() + string.slice(1))
    .join(split)
}
