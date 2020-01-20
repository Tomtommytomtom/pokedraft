import pokeApiService from '@/apis/pokeApiService'
import Pokemon from './pokemon'

const draftSixPokemonAnd = fn => {
  pokeApiService
    .getSixPokemon(generateSixRandomids())
    .then(arg => {
      const draftedPokemon = arg.map(
        data => new Pokemon(data.pokemon, data.item)
      )
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
