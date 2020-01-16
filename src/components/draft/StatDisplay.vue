<template>
  <radar-chart
    :styles="chartStyles"
    :chart-data="chartData"
    :options="chartOptions"
  />
</template>
<script>
import RadarChart from './RadarChart.vue'

export default {
  components: {
    RadarChart
  },
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
    chartData() {
      return {
        labels: this.pokemon.getStatLabels(),
        datasets: [
          {
            label: this.pokemon.name,
            color: 'green',
            borderColor: this.pokemon.getColorForType(0.5),
            borderWidth: 5,
            data: this.pokemon.getStatOrderedArray(),
            fill: false
          }
        ]
      }
    },
    chartOptions() {
      return {
        scale: {
          ticks: {
            min: 0,
            max: 200,
            stepSize: 50,
            showLabelBackdrop: false
          },
          gridLines: {
            display: false
          }
        }
      }
    },
    chartStyles() {
      return {
        color: 'grey'
      }
    }
  },

  watch: {
    pokemon() {
      this.stats = this.pokemon.getStatsObject()
    }
  }
}
</script>

<style></style>
