<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    fill-height
    full-width
  >
    <v-card-title>Pick Infos</v-card-title>
    <v-btn @click="pick">PICK</v-btn>
    <div>
      <ul>
        <li>Base Total Stats: {{ pokemon.getSumOfStats() }}</li>
        <li>Tier: {{ pokemon.getTier() }}</li>
        <li>Reward for picking {{ 720 - pokemon.getSumOfStats() }}</li>
        <li>Held Item: {{ pokemon.getHeldItemName() }}</li>
        <li>Nature: {{ pokemon.nature }}</li>
      </ul>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    pick() {
      this.$emit('pick')
    }
  }
}
</script>

<style></style>
