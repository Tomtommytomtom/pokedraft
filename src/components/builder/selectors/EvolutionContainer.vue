<template>
  <p v-if="!pokemon.getEvolutions()">
    This pokemon has no Evolutions
  </p>
  <evolution-dialog
    v-else
    :evolutions="pokemon.getEvolutions()"
    @evolve-to="evolveTo"
  ></evolution-dialog>
</template>

<script>
import EvolutionDialog from './EvolutionDialog.vue'
export default {
  components: {
    EvolutionDialog
  },
  props: {
    pokemon: {
      type: Object
    }
  },
  methods: {
    evolveTo(arg) {
      this.pokemon.evolveTo(arg)
    }
  }
}
</script>

<style></style>
