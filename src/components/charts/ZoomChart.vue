<template>
  <zingchart :data="chartData" output="canvas"></zingchart>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {
      chartData: {
        type: "line",
          "scale-x": {
    "zooming":true,
    "zoom-to":[900,1000],
    // "item":{
    //   "font-size":10
    // }
  },
  "scale-y": {
    "zooming":true,
    // "zoom-to":[100,200],
    // "values": "50:350:50",
    // "guide":{
    //   "line-style":"dotted"
    // },
    "item":{
      "font-size":10
    }
  },
        plot: {
          "line-color": this.chart.color,
        },
        scaleY: {
            label: { text: 'Usage' }
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
};
</script>

<style>

</style>