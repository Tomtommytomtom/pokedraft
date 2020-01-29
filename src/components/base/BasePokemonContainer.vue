<template>
  <div>
    <v-img :src="pokemon.getSprite()" :alt="pokemon.name" :width="width" />
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object
    },
    width: {
      type: String,
      default: '124'
    }
  },

  data() {
    return {
      pokemonData: this.pokemon
    }
  }
}
</script>
