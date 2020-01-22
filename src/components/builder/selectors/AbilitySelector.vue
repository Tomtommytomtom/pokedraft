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
      selectedAbility: this.value
    }
  },
  computed: {
    hasOnlyOneAbility() {
      return this.abilities.length === 1
    }
  },
  watch: {
    value() {
      this.selectedAbility = this.value
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
