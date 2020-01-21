<template>
  <div class="d-flex">
    <v-col cols="3" class="pa-0 ma-0">
      <v-text-field
        v-model="evText"
        :label="label"
        dense
        width="20px"
        outlined
        @change="emit"
      ></v-text-field
    ></v-col>
    <v-col class="pa-0 ma-0">
      <v-slider
        v-model="evSlider"
        dense
        :max="252"
        :ticks="false"
        :step="4"
        min="0"
        @change="emit"
      ></v-slider
    ></v-col>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      evSlider: 0,
      evText: 0
    }
  },
  methods: {
    emit() {
      this.evText = this.evSlider
      this.$emit('input', this.index, this.evValue)
    }
  }
}
</script>

<style></style>
