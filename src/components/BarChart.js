import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  props: {
    dataset: Array,
    color: String
},
  watch: {
    color() {
        this.data.datasets[0].backgroundColor = this.color;
        this.$data._chart.update();
        // this.renderChart(this.data, this.options);
    },
    dataset() {
        this.data.datasets[0].data = this.dataset;
        this.$data._chart.update();
    }
  },
  data() {
      return {
        data: {
            datasets: [
                {
                    label: 'no label',
                    backgroundColor: this.color,
                    data: this.dataset,
                }
            ]
        },
        options: {
            animation: {
                duration: 0
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'linear',
                    ticks: {
                        source: 'auto',
                        autoSkip: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 30
                    }
                }]
            }
        }
      }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}