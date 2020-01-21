<template>
  <div class="d-flex flex-column" fill-height height="100%">
    <base-pokemon-container :pokemon="pokemon" />
    <ability-selector abilities="pokemon.abilites" />
    <item-selector></item-selector>
    <nature-selector></nature-selector>
    <ev-stat-selector></ev-stat-selector>
  </div>
</template>

<script>
import AbilitySelector from './selectors/AbilitySelector'
import ItemSelector from './selectors/ItemSelector'
import NatureSelector from './selectors/NatureSelector'
import EvStatSelector from './selectors/EvStatSelector'
export default {
  components: {
    AbilitySelector,
    ItemSelector,
    NatureSelector,
    EvStatSelector
  },
  props: {
    pokemon: {
      type: Object
    }
  }
}
</script>

<style></style>
