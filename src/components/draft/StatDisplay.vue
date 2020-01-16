<template>
  <v-sparklines :value="stats" :labels="statNames"></v-sparklines>
</template>

<script>
export default {
  props: {
    statsProp: {
      type: Object
    }
  },

  data() {
    return {}
  },

  computed: {
    stats() {
      return this.statsProp.values()
    },
    statNames() {
      return this.statsProp.keys()
    }
  }
}
</script>

<style></style>
