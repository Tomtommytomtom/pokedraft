<template>
  <v-sheet v-if="pokemonArray.length !== 0" class="d-flex" height="20%">
    <pokemon-container
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
      class="ma-auto"
      @click="selectPokemon"
    />
  </v-sheet>
  <v-sheet v-else><p>loading</p></v-sheet>
</template>

<script>
import PokemonContainer from '../PokemonContainer'
import { bus } from '@/main'

export default {
  components: {
    PokemonContainer
  },

  props: {
    value: {
      type: Object
    },
    pokemonArrayProp: {
      type: Array
    }
  },

  data() {
    return {
      pokemonArray: this.pokemonArrayProp
    }
  },

  watch: {
    pokemonArrayProp() {
      console.log('i changed')
      this.pokemonArray = this.pokemonArrayProp
    },
    pokemonArray() {
      console.log('i changed too', this.pokemonArray)
    }
  },
  methods: {
    selectPokemon(pokemon) {
      bus.$emit('pokemon-selected', pokemon)
    },
    pickPokemon(pokemon) {
      bus.$emit('pokemon-picked', pokemon)
    }
  }
}
</script>

<style></style>
