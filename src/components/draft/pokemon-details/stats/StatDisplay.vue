<template>
  <radar-chart
    :styles="chartStyles"
    :chart-data="chartData"
    :options="chartOptions"
  />
</template>
<script>
import RadarChart from './RadarChart.vue'
import Chart from 'chart.js'

Chart.defaults.global.defaultFontFamily = 'Roboto condensed, sans-serif'
Chart.defaults.global.defaultFontSize = 15
Chart.defaults.global.defaultFontColor = 'rgba(255,255,255,0.5)'

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
            label: this.pokemon.getNameLabel(),
            backgroundColor: this.pokemon.getColorForType(1),
            borderColor: this.pokemon.getColorForType(0.5),
            borderWidth: 5,
            data: this.limitStats(),
            fill: false,
            pointHoverRadius: 8,
            pointHitRadius: 8
          }
        ]
      }
    },
    chartOptions() {
      return {
        tooltips: this.tooltips,
        legend: this.legend,
        scale: {
          linear: this.linear,
          ticks: this.ticks,
          gridLines: this.gridLines,
          angleLines: this.angleLines,
          pointLabels: this.pointLabels
        }
      }
    },
    tooltips() {
      return {
        enabled: true,
        callbacks: {
          title: (tooltips, data) => {
            const tooltip = tooltips[0]
            return data.labels[tooltip.index]
          },
          label: tooltip => {
            return `${this.originalStats()[tooltip.index]}`
          }
        }
      }
    },
    legend() {
      return {
        display: false,
        labels: {
          //The label of the dataset
          fontColor: 'rgba(255,255,255,1)'
        }
      }
    },
    linear() {
      return {
        display: false
      }
    },
    ticks() {
      return {
        min: 0,
        max: this.maxTick,
        stepSize: 30,
        backdropColor: '#373740',
        fontSize: 11
      }
    },
    gridLines() {
      return {
        display: false,
        color: 'white'
      }
    },
    angleLines() {
      return {
        color: 'rgba(255, 255, 255, 0.2)'
      }
    },
    pointLabels() {
      return {
        fontSize: 13
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
    },
    originalStats() {
      return this.pokemon.getStatOrderedArray()
    }
  }
}
</script>

<style></style>
