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
    draftedPokemonArray: {
      type: Array
    }
  },

  data() {
    return {
      pokemonArray: this.draftedPokemonArray
    }
  },

  watch: {
    draftedPokemonArray() {
      this.pokemonArray = this.draftedPokemonArray
    }
  },
  methods: {
    selectPokemon(pokemon) {
      bus.$emit('pokemon-selected', pokemon)
    },
    pickPokemon(pokemon) {
      bus.$emit('pokemon-drafted', pokemon)
    }
  }
}
</script>

<style></style>
