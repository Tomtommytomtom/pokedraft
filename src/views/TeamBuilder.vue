<template>
  <div>
    <div class="d-flex">
      <base-pokemon-container
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService.js'

export default {
  data() {
    return {
      pokemons: this.$route.params.pokemon
    }
  },
  created() {
    pokeApiService.getEvolutionArray(this.pokemons, this.addEvos)
  },

  methods: {
    addEvos(index, evos) {
      this.pokemons[index].addEvolutions(evos)
      this.$set(this.pokemons, index, this.pokemons[index])
    }
  }
}
</script>

<style></style>
