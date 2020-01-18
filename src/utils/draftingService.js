import pokeApiService from '@/apis/pokeApiService'
import Pokemon from './pokemon'

const draftSixPokemonAnd = fn => {
  console.log('hiiiiiiiiii')
  pokeApiService
    .getSixPokemon(generateSixRandomids())
    .then(arg => {
      const draftedPokemon = arg.map(pokemon => new Pokemon(pokemon))
      console.log(fn, arg)
      fn(draftedPokemon)
    })
    .catch(error => {
      console.log('there was an error', error)
    })
}

const generateSixRandomids = () => {
  let ids = [1, 2, 3, 4, 5, 6]
  return ids.map(() => Math.floor(Math.random() * 807 + 1))
}

export default {
  draftSixPokemonAnd
}
