<template>
  <v-sheet class="d-flex" height="20%">
    <pokemon-container
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </v-sheet>
</template>

<script>
import PokemonContainer from '../PokemonContainer'
export default {
  components: {
    PokemonContainer
  },

  props: {
    value: {
      type: Object
    },
    pokemonArrayProp: {
      type: Array,
      default: () => [{ name: 'tim' }, { name: 'tim' }]
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
  methods: {}
}
</script>

<style></style>
