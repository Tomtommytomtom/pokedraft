<template>
  <div class="d-flex">
    <v-col cols="3" class="pa-0 ma-0">
      <v-text-field
        v-model="textValue"
        :label="label"
        dense
        width="20px"
        outlined
        @change="text"
      ></v-text-field
    ></v-col>
    <v-col class="pa-0 ma-0">
      <v-slider
        v-model="slideValue"
        dense
        :max="252"
        :ticks="false"
        :step="4"
        min="0"
        @change="slide"
        @blur="sync"
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
    },
    value: {
      type: Number
    },
    capTrigger: {
      type: Boolean
    }
  },
  data() {
    return {
      textValue: 0,
      slideValue: 0
    }
  },
  watch: {
    value() {
      this.slideValue = this.value
      this.textValue = this.value
    }
  },
  methods: {
    sync() {
      this.textValue = this.value
      this.slideValue = this.value
    },
    text() {
      this.fixTextInput()
      this.slideValue = this.textValue
      console.log('emitted', this.textValue)
      this.$emit('input', { index: this.index, value: this.textValue })
    },
    slide() {
      this.textValue = this.slideValue
      console.log('emitted ', this.slideValue)
      this.$emit('input', { index: this.index, value: this.slideValue })
    },
    fixTextInput() {
      const regEx = /\D+/
      const number = Number(this.textValue)
      if (regEx.test(this.textValue)) {
        console.log('invalid nmbah')
        this.textValue = 0
        return
      }
      if (number > 252) {
        this.textValue = 252
      }
      if (number % 4 !== 0) {
        console.log(number, number % 4)
        this.textValue = number - (number % 4)
      }
      this.textValue = Number(this.textValue)
    }
  }
}
</script>

<style></style>
