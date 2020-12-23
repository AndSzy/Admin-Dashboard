<template>
  <div>
    <!-- <button @click="label_click">FULL</button> -->
    <zingchart
      @label_click="myLabelClick"
      :data="chartData"
      output="canvas"
      :ref="chart.id"
    ></zingchart>
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
            id: "max_btn",
            text: "Maximize",
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
          {
            id: "min_btn",
            text: "Minimize",
            padding: "5px",
            backgroundColor: "#fff",
            borderColor: "#777",
            borderRadius: "5px",
            borderWidth: "1px",
            cursor: "hand",
            fontColor: "#777",
            x: "160px",
            y: "10px",
          },
          {
            id: "zoom_in",
            text: "Zoom In",
            padding: "5px",
            backgroundColor: "#fff",
            borderColor: "#777",
            borderRadius: "5px",
            borderWidth: "1px",
            cursor: "hand",
            fontColor: "#777",
            x: "260px",
            y: "10px",
          },
          {
            id: "zoom_out",
            text: "Zoom Out",
            padding: "5px",
            backgroundColor: "#fff",
            borderColor: "#777",
            borderRadius: "5px",
            borderWidth: "1px",
            cursor: "hand",
            fontColor: "#777",
            x: "360px",
            y: "10px",
          },
          {
            id: "view_all",
            text: "View All",
            padding: "5px",
            backgroundColor: "#fff",
            borderColor: "#777",
            borderRadius: "5px",
            borderWidth: "1px",
            cursor: "hand",
            fontColor: "#777",
            x: "460px",
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
    myLabelClick(ev) {
      let chartObject = this.chart.id;
      if (ev.labelid === "max_btn") {
        alert("ESC to leave");
        this.$refs[chartObject].fullscreen();
      } else if (ev.labelid === "min_btn") {
        alert("clicked");
        // this.$refs[this.chart.id].exitfullscreen();
      } else if (ev.labelid === "zoom_in") {
        this.$refs[this.chart.id].zoomin();
      } else if (ev.labelid === "zoom_out") {
        this.$refs[this.chart.id].zoomout();
      } else if (ev.labelid === "view_all") {
        alert("view all");
        // console.log(this.$refs[this.chart.id].viewall());
        this.$refs[this.chart.id].viewall();
      }
      
    },
  },
};
</script>

<style>
</style>