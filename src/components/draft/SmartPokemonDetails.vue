<script>
import PokemonDetails from './pokemon-details/PokemonDetails'

export default {
  functional: true,
  props: {
    pokemon: {
      type: Object
    }
  },

  render(h, context) {
    if (context.props.pokemon) {
      console.log('nah i guess we in this bruv', context.props.pokemon)
      return h(PokemonDetails, context.data, context.children)
    } else {
      console.log('hey we in this')
      return h('h1', 'Hover over a Pokemon to')
    }
  }
}
</script>
