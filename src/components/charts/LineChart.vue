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
    // "zoom-to":[900,1000],
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
      "font-size":2
    }
  },
        plot: {
          "line-color": this.chart.color,
          exact: false,
          samplingStep: 1,
          maxTrackers: 15, 
          scrollStepMultiplier: 5,
        },
        series: [
          {
            values: this.chart.dataset,
          },
        ],
      },
    };
  },
};
</script>

<style>

</style>