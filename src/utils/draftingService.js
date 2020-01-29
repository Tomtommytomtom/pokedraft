// import pokeApiService from '@/apis/pokeApiService'
import Pokemon from './pokemon'
import pokedex from '@/assets/pokedex.json'
import keys from '@/assets/keys.json'

console.log('imported')

const draftSixPokemon = () => {
  let ids = generateSixRandomids()
  return ids.map(id => new Pokemon(pokedex[keys[id]]))
}

// const draftSixPokemonAnd = fn => {
//   pokeApiService
//     .getSixPokemon(generateSixRandomids())
//     .then(arg => {
//       const draftedPokemon = arg.map(
//         data => new Pokemon(data.pokemon, data.item)
//       )
//       fn(draftedPokemon)
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

// const generateSixRandomids = () => {
//   let ids = [1, 2, 3, 4, 5, 6]
//   return ids.map(() => Math.floor(Math.random() * 807 + 1))
// }

const generateSixRandomids = () => {
  const result = new Array(6).fill(false)
  return result.map(() => Math.floor(Math.random() * 890 + 1))
}

export default {
  draftSixPokemon
}
