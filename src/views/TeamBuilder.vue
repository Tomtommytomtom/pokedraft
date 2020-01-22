<template>
  <div class="d-flex">
    <v-container fluid fill-width class="d-flex" fill-height>
      <base-pokemon-container
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
        @click.native="selectedPokemon = pokemon"
      />
      <div fill-height class="d-flex justify-space-between">
        <v-divider vertical light />
        <build-container :value="selectedPokemon" />
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
      pokemons: this.$route.params.pokemon,
      selectedPokemon: this.$route.params.pokemon[0]
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
    select(n) {
      console.log('clicked', n)
    },
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
