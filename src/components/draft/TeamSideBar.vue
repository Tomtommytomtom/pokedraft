<template>
  <v-container
    v-if="pickedPokemonArray.length > 0"
    class="d-flex flex-column justify-space-around"
    fill-height
  >
    <pokemon-container
      v-for="pokemon in pickedPokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></pokemon-container>
  </v-container>
  <div v-else>
    <p>nothing picked yet</p>
  </div>
</template>

<script>
//replace pokemon-container with something better
import PokemonContainer from '../PokemonContainer'
export default {
  components: {
    PokemonContainer
  },
  props: {
    pickedPokemonArray: {
      type: Array
    }
  }
}
</script>

<style></style>
