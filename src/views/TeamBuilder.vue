<template>
  <div>
    <div class="d-flex">
      <base-pokemon-container
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
    <smogon-string-field :pokemons="pokemons" />
  </div>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService.js'
import SmogonStringField from '@/components/smogon-string-field/SmogonStringField.vue'

export default {
  components: {
    SmogonStringField
  },
  data() {
    return {
      pokemons: this.$route.params.pokemon
    }
  },
  created() {
    pokeApiService
      .getEvolutionsFromArrayOfPokemon(this.pokemons)
      .then(arrayOfEvos =>
        arrayOfEvos.forEach((evos, index) => this.addEvos(evos, index))
      )
  },

  methods: {
    addEvos(evos, index) {
      this.pokemons[index].addEvolutions(evos)
    },
    evolve() {
      this.pokemons[2].evolveInto(this.pokemons[2].evolutions[0])
    }
  }
}
</script>

<style></style>
