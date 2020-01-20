<template>
  <v-card
    width="124px"
    style="border-radius: 100px"
    :style="elevation"
    @click="clicked"
    @mouseenter="borderFlash = false"
    @mouseleave="borderFlash = false"
  >
    <v-img
      :src="require(`../assets/pokeball_${pokemon.getTier()}.png`)"
      :alt="pokemon.name"
      height="124px"
    />
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
      pokemonData: this.pokemon
    }
  },
  computed: {
    elevation() {
      return this.focused ? this.boxShadow(8, 0.5) : this.boxShadow(2, 0.3)
    }
  },
  methods: {
    clicked() {
      this.$emit('click', this.pokemon)
    },
    boxShadow(spread, alpha) {
      return {
        boxShadow: `0 0 10px ${spread}px rgba(255, 255, 255, ${alpha})`
      }
    }
  }
}
</script>

<style scoped>
.not-selected {
  opacity: 0.5;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.1);
}
.selected {
  box-shadow: 0 0 10px 2px rgba(30, 185, 128, 0.5);
  background-color: white;
}
</style>
