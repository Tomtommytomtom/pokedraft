<template>
  <v-sheet v-if="pokemonArray.length !== 0" class="d-flex" height="20%">
    <pokemon-container
      v-for="pokemon in pokemonArray"
      :key="pokemon.id"
      :pokemon="pokemon"
      class="ma-auto"
      :focused="focused[pokemonArray.indexOf(pokemon)]"
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
      pokemonArray: this.draftedPokemonArray,
      focused: [false, false, false, false, false, false]
    }
  },

  watch: {
    draftedPokemonArray() {
      this.pokemonArray = this.draftedPokemonArray
    }
  },
  created() {
    bus.$on('pokemon-picked', () => {
      console.log('hey')
      this.focused.fill(false)
    })
  },

  methods: {
    selectPokemon(pokemon) {
      this.focused.fill(false)
      this.$set(this.focused, this.pokemonArray.indexOf(pokemon), true)
      bus.$emit('pokemon-selected', pokemon)
      console.log(this.focused)
    }
  }
}
</script>

<style></style>
