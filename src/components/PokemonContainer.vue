<template>
  <v-card @mouseover="hover">
    <v-img :src="pokemon.getSprite()" :alt="pokemon.name" height="124px" />
  </v-card>
</template>

<script>
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
      console.log('in hover inside container')
      this.$emit('hover', this.pokemon)
    }
  }
}
</script>

<style></style>
