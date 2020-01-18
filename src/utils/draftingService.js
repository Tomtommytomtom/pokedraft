import pokeApiService from '@/apis/pokeApiService'
import Pokemon from './pokemon'

//const LIST_OF_ITEM_CATEGORIES = [5, 7, 12, 13, 15, 17, 44, 46]

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

// const getRandomItemCategory = () => {
//   const randomIndex = Math.floor(
//     Math.random() * LIST_OF_ITEM_CATEGORIES.length + 1
//   )
//   return LIST_OF_ITEM_CATEGORIES[randomIndex]
// }

// const draftItemForId = id => {}

export default {
  draftSixPokemonAnd
}
