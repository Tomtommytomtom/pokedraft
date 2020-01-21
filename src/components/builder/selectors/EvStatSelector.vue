<template>
  <div>
    <single-ev-selector
      v-for="n in 6"
      :key="n - 1"
      :index="n - 1"
      :input="evSelected"
      :label="labels[n - 1]"
      :current-cap="capValue"
    ></single-ev-selector>
    <p>{{ evs }},{{ sum }},{{ capValue }}</p>
  </div>
</template>

<script>
import SingleEvSelector from './ev-stat-selector/SingleEvSelector'
export default {
  components: {
    SingleEvSelector
  },
  props: {
    labels: {
      type: Array
    }
  },
  data() {
    return {
      evs: [0, 0, 0, 0, 0, 0],
      max: 510
    }
  },
  computed: {
    sum() {
      return this.evs.reduce((curr, acc) => {
        return curr + acc
      }, 0)
    },
    capValue() {
      return this.max - this.sum >= 252 ? 252 : this.max - this.sum
    }
  },
  methods: {
    recalc(n) {
      console.log('recalcing', this.labels[n])
      this.$set(this.evs, n, 0)
    },
    evSelected(index, value) {
      console.log(index, value)
    }
  }
}
</script>

<style></style>
