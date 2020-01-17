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
      stats: this.pokemon.getStatsObject(),
      maxTick: 150
    }
  },

  computed: {
    chartData() {
      return {
        labels: this.pokemon.getStatLabels(),
        datasets: [
          {
            label: this.pokemon.name,
            backgroundColor: this.pokemon.getColorForType(1),
            borderColor: this.pokemon.getColorForType(0.5),
            borderWidth: 5,
            data: this.limitStats(),
            fill: false,
            pointHoverRadius: 8
          }
        ]
      }
    },
    chartOptions() {
      return {
        scale: {
          linear: {
            display: false
          },
          ticks: {
            min: 0,
            max: this.maxTick,
            stepSize: 30,
            backdropColor: '#373740'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          angleLines: {
            color: 'rgba(255, 255, 255, 0.12)'
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
  },

  methods: {
    limitStats() {
      return this.pokemon
        .getStatOrderedArray()
        .map(stat => (stat >= this.maxTick ? this.maxTick : stat))
    }
  }
}
</script>

<style></style>
