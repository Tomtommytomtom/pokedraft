<template>
  <v-select
    v-model="selectedAbility"
    :items="abilities"
    width="30px"
    :disabled="hasOnlyOneAbility"
    @change="emit"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    abilities: {
      type: Array
    }
  },
  data() {
    return {
      selectedAbility: this.abilities[0]
    }
  },
  computed: {
    hasOnlyOneAbility() {
      return this.abilities.length === 1
    }
  },
  methods: {
    emit() {
      this.$emit('input', this.selectedAbility)
    }
  }
}
</script>

<style></style>
