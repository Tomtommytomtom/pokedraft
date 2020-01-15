<template>
  <v-sheet>
    <v-row no-gutters>
      {{ pokemon.name }}
    </v-row>
    <v-row no-gutters>
      <v-col>
        stat placeholder
      </v-col>
      <v-col>
        abilities placeholder
      </v-col>
    </v-row>
    <v-row no-gutters>
      info and pick
    </v-row>
  </v-sheet>
</template>

<script>
import { bus } from '@/main'
export default {
  data() {
    return {
      pokemon: {}
    }
  },

  beforeCreate() {
    bus.$on('pokemon-hovered', pokemon => {
      console.log('received')
      this.pokemon = pokemon
    })
  }
}
</script>

<style></style>
