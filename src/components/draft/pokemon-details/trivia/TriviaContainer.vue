<template>
  <v-card
    class="d-flex flex-column justify-space-between pa-2"
    style="border: solid 1px rgba(255,255,255,0.2)"
  >
    <v-card-title>{{ pokemon.name }}</v-card-title>
    <p>{{ pokemon.getMainType() }} , {{ pokemon.getSecondaryType() }}</p>
    <v-col class="d-flex">
      <p>{{ pokemon.getWeakness() }}</p>
      <p>{{ pokemon.getResistance() }}</p>
    </v-col>
    <v-card-text
      style="border: solid 1px rgba(255,255,255,0.2)"
      fill-height
      class="pa-2"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae
      eius obcaecati soluta accusamus harum at excepturi fugit nemo, porro illo
      quisquam laudantium. Quibusdam fugit non nobis et repudiandae
      iste.</v-card-text
    >
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

<style></style>
