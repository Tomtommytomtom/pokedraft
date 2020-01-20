<template>
  <div>
    <div class="d-flex">
      <base-pokemon-container
        v-for="pokemon in pokemonArray"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
    <div v-for="pokemon in pokemonArray" :key="pokemon.id">
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
  computed: {
    pokemonArray() {
      console.log(this.$route.params, 'inside builder')
      return this.$route.params.pokemon
    }
  }
}
</script>

<style></style>
