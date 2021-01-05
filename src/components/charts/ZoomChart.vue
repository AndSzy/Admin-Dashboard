<template>
  <div>
    <!-- <div class="mt-2"> -->
    <!-- <b-button @click="maximize">Maximize</b-button>
      <b-button @click="minimize">Minimize</b-button> -->
    <!-- <b-button @click="zoomIn">Zoom In</b-button>
      <b-button @click="zoomOut">Zoom Out</b-button>
      <b-button @click="showPeriod(chart.dataset.length - 1)">View All</b-button> -->
    <!-- <b-button @click="reset">Reset</b-button> -->
    <!-- </div> -->
    <b-container class="mt-2">
      <b-row align-h="center">
        <b-button @click="zoomIn">Zoom In</b-button>
        <b-button @click="zoomOut">Zoom Out</b-button>
        <b-button @click="showPeriod(chart.dataset.length - 1)"
          >View All</b-button
        >
        <b-button @click="showPeriod(1)">1D</b-button>
        <b-button @click="showPeriod(10)">10D</b-button>
        <b-button @click="showPeriod(30)">1M</b-button>
        <b-button @click="showPeriod(90)">3M</b-button>
        <b-button @click="showPeriod(360)">1Y</b-button>
        <b-button @click="showCustom(startDate, endDate)">CUSTOM</b-button>
      </b-row>
      <b-row align-h="center">
        <b-form inline>
          <b-form-datepicker v-model="startDate"></b-form-datepicker>

          <b-form-datepicker v-model="endDate"></b-form-datepicker>
        </b-form>
        <b-button>Back</b-button>
        <b-button>Forward</b-button>
      </b-row>
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
      startDate: new Date(this.chart.dataset[0][0][0]),
      endDate: new Date(
        this.chart.dataset[this.chart.dataset.length - 1][0][0]
      ),
      chartData: {
        type: this.chart.chartType,
        // preview: {},
        zoom: {
          backgroundColor: "#ccccff",
          borderWidth: 5,
          borderColor: "#3399ff",
          alpha: 0.3,
        },
        scrollX: {},
        scaleX: {
          label: { text: "Time" },
          zooming: true,
          // "zoom-to":[900,10000],

          itemsOverlap: true,
          maxItems: 11,
          item: {
            angle: -45,
            fontSize: 10,
            paddingBottom: 25,
          },
          step: "day",
          transform: {
            type: "date",
            all: "%m/%d/%Y<br>%h:%i:%s:%q %A",
          },
        },
        scaleY: {
          label: { text: "Usage" },
          // zooming: true,
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
    showPeriod(period) {
      const lastEntry = this.chart.dataset.length - 1;

      this.$refs[this.chart.id].zoomtovalues({
        xmin: lastEntry - period,
        xmax: lastEntry,
      });
    },
    showCustom(start, end) {
      let startPosition = 0;
      let endPosition = this.chart.dataset.length - 1;
      let startDateUnix = new Date(start).getTime();
      let endDateUnix = new Date(end).getTime();

      this.chart.dataset.forEach((element, position) => {
        if (element[0][0] < startDateUnix) {
          startPosition = position;
        }
        if (element[0][0] > endDateUnix) {
          endPosition = position;
        }
      });
      this.$refs[this.chart.id].zoomtovalues({
        xmin: startPosition,
        xmax: endPosition,
      });
    },

    // maximize() {
    //   // this.$refs[this.chart.id].fullscreen();

    //   this.$refs[this.chart.id].resize({
    //     width: "auto",
    //     height: 800,
    //   });
    // },
    // minimize() {
    //   this.$refs[this.chart.id].resize({
    //     width: "100%",
    //     height: "100%",
    //   });
    // },
    zoomIn() {
      this.$refs[this.chart.id].zoomin();
    },
    zoomOut() {
      this.$refs[this.chart.id].zoomout();
    },
    // viewAll() {
    //   this.$refs[this.chart.id].zoomto({ ymin: this.oldestDatabaseEntry, ymax: this.newestDatabaseEntry });
    // },
    // reset() {
    //   this.$refs[this.chart.id].resize({
    //     width: 600,
    //     height: 400,
    //   });
    //   this.$refs[this.chart.id].reload();
    // },
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