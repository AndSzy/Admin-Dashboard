<template>
  <zingchart :data="chartData" output="canvas" height="250px"></zingchart>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
           "type": "ring",
  "title": {
    "text": "Donut Chart"
  },
  "plot": {
    //Use the "slice" attribute to adjust the size of the donut ring.
  },
  "series": [{
      "values": [59]
    },
    {
      "values": [55]
    },
    {
      "values": [30]
    },
    {
      "values": [28]
    },
    {
      "values": [15]
    }
  ]
      },
    };
  },
};
</script>

<style>
</style>