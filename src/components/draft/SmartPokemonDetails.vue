<script>
import PokemonDetails from './pokemon-details/PokemonDetails'

export default {
  functional: true,
  props: {
    localPokemon: {
      type: Object
    }
  },
  data: function() {
    return {
      pokemon: this.localPokemon
    }
  },
  render(h, { props, children }) {
    if (props.localPokemon) {
      return h(
        PokemonDetails,
        {
          props: props
        },
        children
      )
    } else {
      console.log('hey we in this')
      return h('h1', 'Hover over a Pokemon to')
    }
  }
}
</script>
