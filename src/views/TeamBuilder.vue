<template>
  <div class="d-flex justify-space-between">
    <div class="d-flex flex-column">
      <div class="d-flex">
        <base-pokemon-container
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          width="124"
          @click.native="select(pokemon)"
        />
      </div>
      <build-container
        :value="selectedPokemon"
        :index="pokemons.indexOf(selectedPokemon)"
        :item-array="itemArray"
      />
    </div>
    <v-divider vertical light />
    <v-btn @click="saveToLocalStorage()">SAVE</v-btn>
    <v-col cols="2">
      <smogon-string-field :pokemons="pokemons" />
      <v-btn @click="copyToClipboard">COPY TO CLIPBOARD</v-btn>
    </v-col>
  </div>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService.js'
import BuildContainer from '@/components/builder/BuildContainer'
import SmogonStringField from '@/components/smogon-string-field/SmogonStringField.vue'
import Pokemon from '@/utils/pokemon.js'
import { bus } from '@/main.js'

const getFromLocalStorage = function() {
  if (localStorage.getItem('stored_pokemon')) {
    let result = JSON.parse(localStorage.getItem('stored_pokemon'))
    return result.map(pokemon => {
      return Object.setPrototypeOf(pokemon, Pokemon.prototype)
    })
  }
}
export default {
  components: {
    SmogonStringField,
    BuildContainer
  },

  data() {
    return {
      pokemons: this.$route.params.pokemon,
      selectedPokemon: {}
    }
  },

  computed: {
    itemArray() {
      return this.pokemons.map((pokemon, index) => {
        return { item: pokemon.heldItem, index }
      })
    },
    smogonString() {
      return this.pokemons
        .map(pokemon => pokemon.toSmogonString().join('\n'))
        .join('\n\n')
    }
  },
  watch: {
    pokemons() {
      console.log('ah yes we changed')
    }
  },
  created() {
    bus.$on('swap-items', this.swapItems)
    if (!this.pokemons) {
      this.pokemons = getFromLocalStorage()
      this.selectedPokemon = this.pokemons[0]
      this.makeEvosPokemon()
      console.log(this.pokemons)
    } else {
      this.selectedPokemon = this.pokemons[0]
      pokeApiService
        .getEvolutionsFromArrayOfPokemon(this.pokemons)
        .then(arrayOfEvos =>
          arrayOfEvos.forEach((evos, index) => this.addEvos(evos, index))
        )
    }
  },

  methods: {
    swapItems({ pokemonToStealFrom, pokemonToGiveTo }) {
      const take = this.pokemons[pokemonToStealFrom].heldItem
      const give = this.pokemons[pokemonToGiveTo].heldItem

      this.pokemons[pokemonToStealFrom].heldItem = give
      this.pokemons[pokemonToGiveTo].heldItem = take

      console.log(pokemonToStealFrom, pokemonToGiveTo)

      this.$set(
        this.pokemons,
        pokemonToStealFrom,
        this.pokemons[pokemonToStealFrom]
      )
      this.$set(this.pokemons, pokemonToGiveTo, this.pokemons[pokemonToGiveTo])
      console.log(this.pokemons)
    },
    select(pokemon) {
      console.log(
        'selected; evolution line:',
        pokemon.evolutions,
        'evolutions',
        pokemon.getEvolutions()
      )
      this.selectedPokemon = pokemon
    },
    addEvos(evos, index) {
      this.pokemons[index].addEvolutions(evos)
      //this.$set(this.pokemons, index, this.pokemons[index])
    },
    evolve() {
      this.pokemons[2].evolveInto(this.pokemons[2].evolutions[0])
    },
    saveToLocalStorage() {
      console.log(this.pokemons, 'stored')
      localStorage.setItem('stored_pokemon', JSON.stringify(this.pokemons))
    },
    makeEvosPokemon() {
      this.pokemons.forEach(mon =>
        mon.evolutions.forEach(evo => {
          Object.setPrototypeOf(evo, Pokemon.prototype)
        })
      )
      console.log(this.pokemons)
    },
    copyToClipboard() {
      console.log(this)
      this.$copyText(this.smogonString)
    }
  }
}
</script>

<style></style>
