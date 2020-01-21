import axios from 'axios'
import item from '@/utils/itemIdGeneration.js'

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getPokemon = id => {
  return apiClient.get(`/pokemon/${id}`).then(response => response.data)
}

const getItem = id => {
  console.log(id)
  return apiClient
    .get(`/item-category/${item.getRandomItemCategory()}`)
    .then(response => response.data)
}

const getPokemonAndItem = id => {
  return [getPokemon(id), getItem(id)]
}

const getPokemonFromArrayOfIds = arrayOfIds => {
  return axios.all(arrayOfIds.map(id => getPokemon(id)))
}

const getSixPokemon = arrayOfIds => {
  return axios
    .all(arrayOfIds.map(id => getPokemonAndItem(id)).flat(1))
    .then(res => {
      let result = []
      for (let i = 0; i < res.length; i = i + 2) {
        result.push({
          pokemon: res[i],
          item: res[i + 1]
        })
      }

      return result
    })
}

const getEvolutionsFromArrayOfPokemon = array => {
  return axios.all(array.map(pokemon => getEvolutionsFromPokemon(pokemon)))
}

const getEvolutionsFromPokemon = pokemon => {
  return getEvolutionChain(pokemon)
    .then(chain => reduceChainToIds(chain))
    .then(nestedIds => nestedIds.flat(1))
    .then(ids => getPokemonFromArrayOfIds(ids))
}

const getEvolutionChain = pokemon => {
  return axios
    .get(pokemon.speciesUrl)
    .then(response => response.data)
    .then(data => {
      return axios
        .get(data.evolution_chain.url)
        .then(response => response.data.chain)
    })
}

const reduceChainToIds = chain => {
  let resultArray = [extractIdFromLink(chain)]
  let currentEvo = chain
  while (currentEvo.evolves_to[0]) {
    resultArray.push(extractIdFromLink(currentEvo.evolves_to))
    currentEvo = currentEvo.evolves_to[0]
  }

  return resultArray
}

const extractIdFromLink = link => {
  const regEx = /\/(\d{1,3})\//
  const array = [link].flat(1)
  return array.map(pokemon => pokemon.species.url.match(regEx)[1])
}

export default {
  getPokemon,
  getSixPokemon,
  getEvolutionsFromArrayOfPokemon
}
