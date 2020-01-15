<template>
  <v-card class="ma-auto" @mouseover="hover">
    <v-img :src="sprite" :alt="name" height="124px" />
  </v-card>
</template>

<script>
import { bus } from '@/main'

export default {
  props: {
    pokemon: {
      type: Object,
      default: () => ({ name: null })
    }
  },

  data() {
    return {
      pokemonData: this.pokemon
    }
  },

  computed: {
    id() {
      return this.pokemonData.id
    },
    name() {
      return this.pokemonData.name
    },
    sprite() {
      console.log(this.pokemonData.sprites.front_default)
      return this.pokemonData.sprites.front_default
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
