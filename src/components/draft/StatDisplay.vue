<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  props: {
    pokemon: {
      type: Object
    }
  },

  data() {
    return {
      stats: this.pokemon.getStatsObject()
    }
  },

  computed: {
    statValues() {
      console.log(Object.values(this.stats))
      return Object.values(this.stats)
    },
    statNames() {
      console.log(Object.keys(this.stats), this.stats)
      return Object.keys(this.stats)
    }
  },

  watch: {
    pokemon() {
      this.stats = this.pokemon.getStatsObject()
    }
  },
  mounted() {
    this.renderChart({
      labels: this.statNames,
      datasets: [
        {
          label: this.pokemon.name,
          backgroundColor: 'green',
          data: this.statValues
        }
      ]
    })
  }
}
</script>

<style></style>
