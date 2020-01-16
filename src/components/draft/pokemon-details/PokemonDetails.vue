<template>
  <v-sheet>
    <v-row no-gutters>
      <pokemon-container :pokemon="pokemon" />
    </v-row>
    <v-row no-gutters>
      <v-col> </v-col>
      <v-col>
        abilities placeholder
      </v-col>
    </v-row>
    <v-row no-gutters>
      <stat-display class="ma-auto" :pokemon="pokemon" />
    </v-row>
  </v-sheet>
</template>

<script>
import { bus } from '@/main'
import StatDisplay from '../StatDisplay'
import PokemonContainer from '../../PokemonContainer'

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
    bus.$on('pokemon-hovered', pokemon => {
      console.log('received')
      this.pokemon = pokemon
    })
  }
}
</script>

<style></style>
