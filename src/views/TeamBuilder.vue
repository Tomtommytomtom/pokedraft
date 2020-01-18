<template>
  <div>
    <base-pokemon-container
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
export default {
  computed: {
    pokemonArray() {
      console.log(this.$route.params, 'inside builder')
      return this.$route.params.pokemon
    }
  }
}
</script>

<style></style>
