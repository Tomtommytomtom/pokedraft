<template>
  <v-card>
    <v-card-title>Do you want to evolve to {{ pokemon.name }}?</v-card-title>
    <base-pokemon-container :pokemon="pokemon"></base-pokemon-container>
  </v-card>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object
    }
  }
}
</script>
