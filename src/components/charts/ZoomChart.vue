<template>
  <div>
    <div class="mt-2">
      <b-button @click="maximize">Maximize</b-button>
      <b-button @click="minimize">Minimize</b-button>
      <b-button @click="zoomIn">Zoom In</b-button>
      <b-button @click="zoomOut">Zoom Out</b-button>
      <b-button @click="viewAll">View All</b-button>
      <b-button @click="reset">Reset</b-button>
    </div>
    <b-container class="mt-2">

      <b-form-row>

      <b-button @click="maximize">1D</b-button>
      <b-button @click="minimize">10D</b-button>
      <b-button @click="zoomIn">1M</b-button>
      <b-button @click="zoomOut">3M</b-button>
      <b-button @click="viewAll">1Y</b-button>
      <b-button @click="reset">CUSTOM</b-button>
      <b-form inline>
        <b-form-input
          placeholder="Start Date"
        ></b-form-input>
        <b-input-group>
          <b-form-input
            placeholder="End Date"
          ></b-form-input>
        </b-input-group>
      </b-form>

      </b-form-row>

    </b-container>
    <zingchart
      class="mb-4"
      :data="chartData"
      output="canvas"
      :ref="chart.id"
      @zoom="alert"
    ></zingchart>
  </div>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {
      chartData: {
        type: this.chart.chartType,
        // preview: {},
        // zoom: {
        //   backgroundColor: "#ccccff",
        //   borderWidth: 5,
        //   borderColor: "#3399ff",
        //   alpha: 0.3,
        // },
        scrollX: {},
        scaleX: {
          label: { text: "Time" },
          zooming: true,
          itemsOverlap: true,
          maxItems: 11,
          item: {
            angle: -45,
            fontSize: 10,
          },
          transform: {
            type: "date",
            all: "%m/%d/%Y<br>%h:%i:%s:%q %A",
          },
        },
        scaleY: {
          label: { text: "Usage" },
          item: {
            "font-size": 10,
          },
        },
        plot: {
          "line-color": this.chart.color,
        },
        series: [
          {
            values: this.chart.dataset,
          },
        ],
      },
    };
  },
  methods: {
    alert() {
      console.log("zoom!");
    },
    maximize() {
      // this.$refs[this.chart.id].fullscreen();

      this.$refs[this.chart.id].resize({
        width: "auto",
        height: 800,
      });
    },
    minimize() {
      this.$refs[this.chart.id].resize({
        width: "100%",
        height: "100%",
      });
    },
    zoomIn() {
      this.$refs[this.chart.id].zoomin();
    },
    zoomOut() {
      this.$refs[this.chart.id].zoomout();
    },
    viewAll() {
      // let length = this.chart.dataset.dataArray.length
      // let max = this.chart.dataset.dataArray[length-1][0]
      // console.log(this.chart.dataset.dataArray[length-1][0]);
      this.$refs[this.chart.id].zoomto({ xmin: 0, xmax: 100 });
    },
    reset() {
      this.$refs[this.chart.id].resize({
        width: 600,
        height: 400,
      });
      // this.$refs[this.chart.id].reload();
    },
  },
};
</script>

<style>
.zingChartWrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>