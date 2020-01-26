<template>
  <div>
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <span
        v-for="paragraph in pokemon.toSmogonString()"
        :key="pokemon.toSmogonString().indexOf(paragraph)"
      >
        {{ paragraph }}<br />
      </span>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array
    }
  }
}
</script>

<style></style>
