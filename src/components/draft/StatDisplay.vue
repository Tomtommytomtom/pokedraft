<template>
  <v-sparklines :value="statsInCorrectOrder" :labels="statOrder"></v-sparklines>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array
    }
  },

  data() {
    return {}
  }
}
</script>

<style></style>
