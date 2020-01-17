<template>
  <v-sheet>
    <v-row no-gutters>
      <pokemon-container :pokemon="pokemon" />
      <v-card-title>{{ pokemon.getAbilityString() }}</v-card-title>
    </v-row>
    <v-row no-gutters>
      <stat-display :pokemon="pokemon" />
      <p>trivia placeholder</p>
    </v-row>
  </v-sheet>
</template>

<script>
import { bus } from '@/main'
import StatDisplay from './stats/StatDisplay'
import PokemonContainer from '@/components/PokemonContainer'

export default {
  components: {
    StatDisplay,
    PokemonContainer
  },

  props: {
    localPokemon: Object
  },

  data() {
    return {
      pokemon: this.localPokemon
    }
  },

  created() {
    console.log('i am now created', this)
    bus.$on('pokemon-selected', pokemon => {
      console.log('received')
      this.pokemon = pokemon
    })
  }
}
</script>

<style></style>
