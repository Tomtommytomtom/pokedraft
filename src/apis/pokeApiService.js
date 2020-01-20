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
      console.log(result)
      return result
    })
}

export default {
  getPokemon,
  getSixPokemon
}
