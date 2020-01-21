<template>
  <div>
    <v-container fluid fill-width class="d-flex" fill-height>
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        fill-height
        class="d-flex justify-space-between"
      >
        <v-divider vertical light />
        <build-container :pokemon="pokemon" />
      </div>
      <v-divider vertical light />
    </v-container>
    <smogon-string-field :pokemons="pokemons" />
  </div>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService.js'
import BuildContainer from '@/components/builder/BuildContainer'
import SmogonStringField from '@/components/smogon-string-field/SmogonStringField.vue'

export default {
  components: {
    SmogonStringField,
    BuildContainer
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
