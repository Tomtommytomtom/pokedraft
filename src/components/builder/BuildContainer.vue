<template>
  <div class="d-flex flex-column" fill-height height="100%">
    <base-pokemon-container :pokemon="pokemon" />
    <ability-selector
      v-model="pokemon.selectedAbility"
      :abilities="pokemon.getAbilityArray()"
    />
    <item-selector></item-selector>
    <nature-selector v-model="pokemon.nature"></nature-selector>
    <ev-stat-selector
      v-model="pokemon.evs"
      :labels="pokemon.getStatLabels()"
    ></ev-stat-selector>
    <p>{{ pokemon.evs }}</p>
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
    value: {
      type: Object
    }
  },
  data() {
    return {
      pokemon: this.value
    }
  },
  watch: {
    value() {
      this.pokemon = this.value
      console.log(this.pokemon.evs)
    },
    pokemon() {
      console.log('i changed')
    }
  }
}
</script>

<style></style>
