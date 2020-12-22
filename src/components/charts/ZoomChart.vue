<template>
  <div>
    <button @click="fullScreen">FULL</button>
    <zingchart :data="chartData" output="canvas" ref="chart"></zingchart>
  </div>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {
      chartData: {
        type: "line",
        labels: [
          {
            id: "reload_btn",
            text: "Reload",
            padding: "5px",
            backgroundColor: "#fff",
            borderColor: "#777",
            borderRadius: "5px",
            borderWidth: "1px",
            cursor: "hand",
            fontColor: "#777",
            x: "60px",
            y: "10px",
          },
        ],
        // preview: {},
        // zoom: {
        //   backgroundColor: "#ccccff",
        //   borderWidth: 5,
        //   borderColor: "#3399ff",
        //   alpha: 0.3,
        // },
        scrollX: {},
        // scrollY: {},
        scaleX: {
          label: { text: "Time" },
          zooming: true,
          "zoom-to": [900, 1000],
          // "item":{
          //   "font-size":40
          // }
        },
        scaleY: {
          label: { text: "Usage" },
          zooming: true,
          "zoom-to": [0, 30],
          // "values": "50:350:50",
          // "guide":{
          //   "line-style":"dotted"
          // },
          item: {
            "font-size": 10,
          },
        },
        plot: {
          "line-color": this.chart.color,
        },
        series: [
          {
            values: this.chart.dataset.dataArray, //[3,4,6,7,9,2]

            // this.chart.dataset.categoriesArray
            // [12731253712821, 78213612783721, 8928372]
            // let currentDate = new Date();
            // currentDate.setDate(-i)
          },
        ],
      },
    };
  },
  methods: {
    fullScreen() {
      this.$refs.chart.fullscreen();
    },
  },
};
</script>

<style>
</style>