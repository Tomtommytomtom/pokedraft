<template>
  <p v-if="!evolutions">This pokemon has no Evolutions</p>
  <evolution-dialog v-else :evolutions="evolutions"></evolution-dialog>
</template>

<script>
import EvolutionDialog from './EvolutionDialog.vue'
export default {
  components: {
    EvolutionDialog
  },
  props: {
    evolutions: {
      type: Array
    }
  }
}
</script>

<style></style>
