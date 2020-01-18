<template>
  <div>
    <pokemon-container
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import PokemonContainer from '@/components/PokemonContainer'

export default {
  components: {
    PokemonContainer
  },
  computed: {
    pokemonArray() {
      console.log(this.$route.params, 'inside builder')
      return this.$route.params.pokemon
    }
  }
}
</script>

<style></style>
