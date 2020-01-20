export default class SmogonString {
  constructor(arrayOfPokemon) {
    this.array = arrayOfPokemon
  }

  toString() {
    return this.array.map(pokemon => pokemon.toSmogonString()).join('\n')
  }
}
