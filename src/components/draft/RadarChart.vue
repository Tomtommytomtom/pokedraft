<script>
import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Radar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object
    }
  },
  mounted() {
    console.log(this.options)
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style></style>
