<template>
  <div>
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <span
        v-for="para in pokemon.toSmogonString()"
        :key="pokemon.toSmogonString().indexOf(para)"
      >
        {{ para }}<br />
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
