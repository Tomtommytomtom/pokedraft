<template>
  <v-container
    v-if="pickedPokemonArray.length > 0"
    class="d-flex flex-column justify-space-around"
    fill-height
  >
    <base-pokemon-container
      v-for="pokemon in pickedPokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </v-container>
  <div v-else>
    <p>nothing picked yet</p>
  </div>
</template>

<script>
//replace pokemon-container with something better
export default {
  props: {
    pickedPokemonArray: {
      type: Array
    }
  }
}
</script>

<style></style>
