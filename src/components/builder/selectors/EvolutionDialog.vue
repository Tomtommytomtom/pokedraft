<template>
  <div>
    <v-btn @click="dialog = true">EVOLVE ME</v-btn>
    <v-dialog v-model="dialog">
      <v-sheet>
        <base-pokemon-container
          v-for="pokemon in evolutions"
          :key="pokemon.id"
          :pokemon="pokemon"
          @click.native="selectedPokemon = pokemon"
        ></base-pokemon-container>
      </v-sheet>
      <v-sheet>
        <small-evo-details :pokemon="selectedPokemon" />
      </v-sheet>
      <v-btn @click="dialog = false">
        close
      </v-btn>
      <v-btn @click="evolveTo">
        evolve
      </v-btn>
    </v-dialog>
  </div>
</template>

<script>
import SmallEvoDetails from './SmallEvoDetails'
export default {
  components: {
    SmallEvoDetails
  },
  props: {
    evolutions: {
      type: Array
    }
  },
  data() {
    return {
      evos: this.evolutions,
      dialog: false,
      selectedPokemon: this.evolutions[0]
    }
  },
  methods: {
    evolveTo() {
      console.log('evolving to', this.selectedPokemon)
    }
  }
}
</script>

<style></style>
