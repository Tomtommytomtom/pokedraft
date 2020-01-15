import axios from 'axios'

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

const getSixPokemon = arrayOfIds => {
  return axios.all(arrayOfIds.map(id => getPokemon(id)))
}

export default {
  getPokemon,
  getSixPokemon
}
