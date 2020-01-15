<template>
  <v-sheet height="100%">
    <v-sheet height="80%">
      <v-container fluid fill-height class="align-stretch ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="2">team</v-col>
          <v-divider vertical light />
          <v-col cols="7"><pokemon-details /></v-col>
          <v-divider vertical light />
          <v-col>shop</v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-divider light />
    <pokemon-footer
      v-model="selectedPokemon"
      :pokemon-array-prop="pokemonArray"
    />
  </v-sheet>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService'
import PokemonFooter from '@/components/draft/PokemonFooter'
import PokemonDetails from '@/components/draft/PokemonDetails'

export default {
  name: 'Home',

  components: {
    PokemonFooter,
    PokemonDetails
  },

  data() {
    return {
      pokemon: {},
      pokemonArray: [],
      selectedPokemon: {}
    }
  },

  watch: {
    pokemonArray() {
      console.log(this.pokemonArray, 'inside array')
    }
  },

  created() {
    pokeApiService
      .getSixPokemon([1, 2, 3, 4, 5, 6])
      .then(arg => {
        console.log('finished')
        this.pokemonArray = arg
      })
      .catch(error => {
        console.log('there was an error: ', error)
      })
  },

  methods: {}
}
</script>

<style></style>
