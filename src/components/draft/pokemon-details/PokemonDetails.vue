<template>
  <v-sheet>
    <v-row no-gutters>
      {{ pokemon.name }}
    </v-row>
    <v-row no-gutters>
      <v-col>
        <stat-display :stats="statsArray" />
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
import StatDisplay from '../StatDisplay'

export default {
  components: {
    StatDisplay
  },
  data() {
    return {
      pokemon: undefined
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
