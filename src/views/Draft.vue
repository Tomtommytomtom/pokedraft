<template>
  <v-sheet height="100%">
    <v-sheet height="80%">
      <v-container fluid fill-height class="align-stretch ma-0 pa-0">
        <v-row no-gutters>
          <v-col cols="2"
            ><team-side-bar :picked-pokemon-array="pickedPokemonArray"
          /></v-col>
          <v-divider vertical light />
          <v-col cols="7"
            ><smart-pokemon-details :local-pokemon="selectedPokemon"
          /></v-col>
          <v-divider vertical light />
          <v-col>other info</v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-divider light />
    <pokemon-footer :drafted-pokemon-array="pokemonArray" />
  </v-sheet>
</template>

<script>
import PokemonFooter from '@/components/draft/PokemonFooter'
import SmartPokemonDetails from '@/components/draft/pokemon-details/SmartPokemonDetails'
import TeamSideBar from '@/components/draft/TeamSideBar'
import draftingService from '@/utils/draftingService'

import { bus } from '@/main'

export default {
  components: {
    PokemonFooter,
    SmartPokemonDetails,
    TeamSideBar
  },

  data() {
    return {
      pokemon: {},
      pokemonArray: [],
      selectedPokemon: undefined,
      pickedPokemonArray: []
    }
  },
  computed: {
    hasPickedSixPokemon() {
      return this.pickedPokemonArray.length === 6
    }
  },

  created() {
    this.draft()
    bus.$on('pokemon-selected', pokemon => {
      this.selectedPokemon = pokemon
    })
    bus.$on('pokemon-picked', () => {
      this.picked()
    })
  },

  methods: {
    draft() {
      this.pokemonArray = []
      this.selectedPokemon = null
      draftingService.draftSixPokemonAnd(this.saveIntoPokemonArray)
    },
    saveIntoPokemonArray(draftedPokemon) {
      this.pokemonArray = draftedPokemon
    },
    picked() {
      this.pickedPokemonArray.push(this.selectedPokemon)

      if (this.hasPickedSixPokemon) {
        this.$router.push({
          name: 'builder',
          params: { pokemon: this.pickedPokemonArray }
        })
        return
      }
      this.draft()
    }
  }
}
</script>

<style></style>
