<template>
  <v-select v-model="selectedNature" :items="natures" @change="emit"></v-select>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    natures: {
      type: Array
    }
  },
  data() {
    return {
      selectedNature: this.natures[0]
    }
  },
  computed: {
    natureDisplay: {
      get() {
        return this.selectedNature.charAt(0).toUpperCase()
      },
      set(newValue) {
        this.selectedNature = newValue.toLowerCase()
      }
    }
  },
  methods: {
    emit() {
      this.$emit('input', this.selectedNature)
    }
  }
}
</script>

<style></style>
