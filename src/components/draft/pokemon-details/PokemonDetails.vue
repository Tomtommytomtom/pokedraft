<template>
  <v-container class="d-flex flex-column justify-space-between" fill-height>
    <v-col class="d-flex ma-0 pa-0">
      <pokemon-container :pokemon="pokemon" />
      <v-card-title>{{ pokemon.getAbilityString() }}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn x-large color="primary" class="my-auto mr-3" @click="pick"
        >PICK</v-btn
      >
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
