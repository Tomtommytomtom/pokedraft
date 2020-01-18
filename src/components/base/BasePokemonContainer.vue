<template>
  <v-card
    width="124px"
    style="border-radius: 3px; border: solid rgba(255,255,255,0.1) 1px"
  >
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
  }
}
</script>
