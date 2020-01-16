<template>
  <v-card class="ma-auto" @mouseover="hover">
    <v-img :src="pokemon.getSprite()" :alt="pokemon.name" height="124px" />
  </v-card>
</template>

<script>
import { bus } from '@/main'

export default {
  props: {
    pokemon: {
      type: Object
    }
  },

  data() {
    return {
      pokemonData: this.pokemon
    }
  },
  methods: {
    hover() {
      console.log('emitted', this.name)
      bus.$emit('pokemon-hovered', this.pokemon)
    }
  }
}
</script>

<style></style>
