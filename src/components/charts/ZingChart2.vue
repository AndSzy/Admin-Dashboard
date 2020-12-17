<template>
  <zingchart :data="chartData" output="canvas" height="100%" width="100%"></zingchart>
</template>

<script>
export default {
  props: ["chart"],
  data() {
    return {
      chartData: {
        type: "area",
        plot: {
          "line-color": "#ff00ff",
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