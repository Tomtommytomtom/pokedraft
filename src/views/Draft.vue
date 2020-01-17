<template>
  <v-sheet height="100%">
    <v-sheet height="80%">
      <v-container fluid fill-height class="align-stretch ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="2">team</v-col>
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
    <pokemon-footer :pokemon-array-prop="pokemonArray" />
  </v-sheet>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService'
import PokemonFooter from '@/components/draft/PokemonFooter'
import SmartPokemonDetails from '@/components/draft/SmartPokemonDetails'

import Pokemon from '@/utils/pokemon'

import { bus } from '@/main'

export default {
  name: 'Home',

  components: {
    PokemonFooter,
    SmartPokemonDetails
  },

  data() {
    return {
      pokemon: {},
      pokemonArray: [],
      selectedPokemon: undefined
    }
  },

  watch: {
    pokemonArray() {
      console.log(this.pokemonArray, 'inside array')
    }
  },

  created() {
    pokeApiService
      .getSixPokemon(this.generateSixRandomids())
      .then(arg => {
        this.pokemonArray = arg.map(pokemon => new Pokemon(pokemon))
      })
      .catch(error => {
        console.log('there was an error: ', error)
      })

    bus.$on('pokemon-selected', pokemon => {
      this.selectedPokemon = pokemon
    })
  },

  methods: {
    draftSixPokemon() {
      console.log('draft here')
    },
    generateSixRandomids() {
      let ids = [1, 2, 3, 4, 5, 6]
      return ids.map(() => Math.floor(Math.random() * 801))
    }
  }
}
</script>

<style></style>
