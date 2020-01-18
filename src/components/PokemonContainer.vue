<template>
  <v-card
    :elevation="elevation"
    width="124px"
    @click="clicked"
    @mouseenter="borderFlash = false"
    @mouseleave="borderFlash = false"
  >
    <v-img :src="pokemon.getSprite()" :alt="pokemon.name" height="124px" />
  </v-card>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object
    },
    focused: {
      type: Boolean
    }
  },

  data() {
    return {
      pokemonData: this.pokemon,
      borderStyle: {
        border: 'solid green 8px'
      },
      borderFlash: false
    }
  },
  computed: {
    elevation() {
      return this.focused ? 8 : 2
    }
  },
  methods: {
    clicked() {
      this.$emit('click', this.pokemon)
    }
  }
}
</script>

<style></style>
