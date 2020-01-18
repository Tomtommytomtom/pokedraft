<template>
  <v-sheet height="100%">
    <v-sheet height="80%">
      <v-container fluid fill-height class="align-stretch ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="2"
            ><team-side-bar :picked-pokemon-array="pickedPokemonArray"
          /></v-col>
          <v-divider vertical light />
          <v-col cols="7"
            ><smart-pokemon-details :local-pokemon="selectedPokemon"
          /></v-col>
          <v-divider vertical light />
          <v-col>shop</v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-divider light />
    <pokemon-footer :drafted-pokemon-array="pokemonArray" />
  </v-sheet>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService'
import PokemonFooter from '@/components/draft/PokemonFooter'
import SmartPokemonDetails from '@/components/draft/pokemon-details/SmartPokemonDetails'
import TeamSideBar from '@/components/draft/TeamSideBar'

import Pokemon from '@/utils/pokemon'

import { bus } from '@/main'

export default {
  name: 'Home',

  components: {
    PokemonFooter,
    SmartPokemonDetails,
    TeamSideBar
  },

  data() {
    return {
      pokemon: {},
      pokemonArray: [],
      selectedPokemon: undefined,
      pickedPokemonArray: []
    }
  },

  watch: {
    pokemonArray() {}
  },

  created() {
    this.draftSixPokemon()
    bus.$on('pokemon-selected', pokemon => {
      this.selectedPokemon = pokemon
    })
    bus.$on('pokemon-picked', pokemon => {
      console.log(pokemon.getNameLabel(), ' was picked')
      this.picked()
    })
  },

  methods: {
    draftSixPokemon() {
      this.pokemonArray = []
      this.selectedPokemon = null
      pokeApiService
        .getSixPokemon(this.generateSixRandomids())
        .then(arg => {
          this.pokemonArray = arg.map(pokemon => new Pokemon(pokemon))
        })
        .catch(error => {
          console.log('there was an error', error)
        })
    },
    generateSixRandomids() {
      let ids = [1, 2, 3, 4, 5, 6]
      return ids.map(() => Math.floor(Math.random() * 806 + 1))
    },
    picked() {
      this.pickedPokemonArray.push(this.selectedPokemon)
      console.log(this.pickedPokemonArray)
      this.draftSixPokemon()
    }
  }
}
</script>

<style></style>
