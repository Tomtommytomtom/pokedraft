<template>
  <v-container class="d-flex flex-column" fluid>
    <v-row no-gutters
      ><stat-display :pokemon="pokemon" />
      <base-pokemon-container :pokemon="pokemon" width="400" />

      <pick-section :pokemon="pokemon" @pick="pick" />
    </v-row>
    <v-row no-gutters> <trivia-container :pokemon="pokemon" /> </v-row>
  </v-container>
</template>

<script>
import { bus } from '@/main'
import StatDisplay from './stats/StatDisplay'
import TriviaContainer from './trivia/TriviaContainer'
import PickSection from './pick-section/PickSection'

export default {
  components: {
    StatDisplay,
    TriviaContainer,
    PickSection
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
    bus.$on('pokemon-selected', pokemon => {
      this.pokemon = pokemon
    })
  },

  methods: {
    pick() {
      bus.$emit('pokemon-picked', this.pokemon)
    }
  }
}
</script>

<style></style>
