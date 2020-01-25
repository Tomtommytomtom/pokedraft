<template>
  <div class="d-flex justify-space-between">
    <div class="d-flex flex-column">
      <div class="d-flex">
        <base-pokemon-container
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          @click.native="selectedPokemon = pokemon"
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
    </v-col>
  </div>
</template>

<script>
import pokeApiService from '@/apis/pokeApiService.js'
import BuildContainer from '@/components/builder/BuildContainer'
import SmogonStringField from '@/components/smogon-string-field/SmogonStringField.vue'
import Pokemon from '@/utils/pokemon.js'

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
    itemArray: {
      get() {
        return this.pokemons.map((pokemon, index) => {
          return { item: pokemon.heldItem, index }
        })
      },
      set({ item, index }) {
        console.log(item, index)
      }
    }
  },
  created() {
    if (!this.pokemons) {
      this.pokemons = getFromLocalStorage()
      this.selectedPokemon = this.pokemons[0]
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
    select(n) {
      console.log('clicked', n)
    },
    addEvos(evos, index) {
      this.pokemons[index].addEvolutions(evos)
    },
    evolve() {
      this.pokemons[2].evolveInto(this.pokemons[2].evolutions[0])
    },
    saveToLocalStorage() {
      console.log(this.pokemons, 'stored')
      localStorage.setItem('stored_pokemon', JSON.stringify(this.pokemons))
    }
  }
}
</script>

<style></style>
