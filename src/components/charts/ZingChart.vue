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
        plot: {
          "line-color": this.chart.color,
          exact: false,
          samplingStep: 1,
          maxTrackers: 15, 
          scrollStepMultiplier: 5,
        },
        series: [
          {
            values: this.chart.dataset.dataArray,
          },
        ],
      },
    };
  },
};
</script>

<style>

</style>