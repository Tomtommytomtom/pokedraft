<template>
  <v-select v-model="selectedNature" :items="natures" @change="emit"></v-select>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {
      selectedNature: this.value,
      natures: [
        'hardy',
        'lonely',
        'brave',
        'adamant',
        'naughty',
        'bold',
        'docile',
        'relaxed',
        'impish',
        'lax',
        'timid',
        'hasty',
        'serious',
        'jolly',
        'naive',
        'modest',
        'mild',
        'quiet',
        'bashful',
        'rash',
        'calm',
        'gentle',
        'sassy',
        'careful',
        'quirky'
      ]
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
