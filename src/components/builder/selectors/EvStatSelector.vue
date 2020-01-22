<template>
  <div>
    <single-ev-selector
      v-for="n in 6"
      :key="n - 1"
      :value="evs[n - 1]"
      :index="n - 1"
      :label="labels[n - 1]"
      :cap-trigger="capTrigger[n - 1]"
      @input="evSelected"
    ></single-ev-selector>
    <p>{{ sum }}/{{ max }} EVS</p>
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
      capTrigger: [false, false, false, false, false, false],
      max: 508
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
    evSelected({ index, value }) {
      this.recalc(index)
      if (value > this.capValue) {
        console.log('dingdingdgin', this.capValue, index)
        this.$set(this.capTrigger, index, !this.capTrigger[index])
        this.$set(this.evs, index, this.capValue)
      } else {
        this.$set(this.evs, index, value)
      }
      this.$emit('input', this.evs)
    }
  }
}
</script>

<style></style>
