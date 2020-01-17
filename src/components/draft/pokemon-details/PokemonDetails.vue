<template>
  <v-container class="d-flex flex-column justify-space-between" fill-height>
    <v-col class="d-flex ma-0 pa-0">
      <pokemon-container :pokemon="pokemon" />
      <v-card-title>{{ pokemon.getAbilityString() }}</v-card-title>
    </v-col>
    <v-col class="d-flex ma-0 pa-0">
      <p>
        metadata, gold, tier, which how to pick, maybe which item its holding
      </p>
    </v-col>
    <v-col class="d-flex ma-0 pa-0">
      <stat-display :pokemon="pokemon" />
      <trivia-container />
    </v-col>
  </v-container>
</template>

<script>
import { bus } from '@/main'
import StatDisplay from './stats/StatDisplay'
import PokemonContainer from '@/components/PokemonContainer'
import TriviaContainer from './trivia/TriviaContainer'

export default {
  components: {
    StatDisplay,
    PokemonContainer,
    TriviaContainer
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
