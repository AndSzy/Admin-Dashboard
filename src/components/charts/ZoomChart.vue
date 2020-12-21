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