<script>
import PokemonDetails from './PokemonDetails'
import EmptyPokemonDetails from './EmptyPokemonDetails'

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
      return h(EmptyPokemonDetails)
    }
  }
}
</script>
