<template>
  <div class="d-flex flex-column" fill-height height="100%">
    <ability-selector
      v-model="pokemon.selectedAbility"
      :abilities="pokemon.getAbilityArray()"
    />
    <item-selector :index="index" :item-array="itemArray" />
    <evolution-container :pokemon="pokemon"></evolution-container>
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
import EvolutionContainer from './selectors/EvolutionContainer'

export default {
  components: {
    AbilitySelector,
    ItemSelector,
    NatureSelector,
    EvStatSelector,
    EvolutionContainer
  },
  props: {
    value: {
      type: Object
    },
    itemArray: {
      type: Array
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      pokemon: this.value
    }
  },
  watch: {
    itemArray() {
      console.log('hehehe i changed')
    },
    value() {
      this.pokemon = this.value
      console.log(this.pokemon.evs)
    },
    pokemon() {
      console.log('i changed')
    }
  },
  methods: {
    log() {
      console.log(this.pokemon)
      this.pokemon.logEvolutionNamesWithIndex()
      this.pokemon.evolveOneStage()
    }
  }
}
</script>

<style></style>
