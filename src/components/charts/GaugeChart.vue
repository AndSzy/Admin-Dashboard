<template>
  <zingchart :data="chartData" output="canvas" height="250px"></zingchart>
</template>

<script>
export default {
  data() {
      
    return {
      chartData: {
      "type": "gauge",
  "scale-r": {
    "aperture": 200,
    "values": "0:100:20",
    "center": {
      "size": 5,
      "background-color": "#66CCFF #FFCCFF",
      "border-color": "none"
    },
    "ring": { //Ring with Rules
      "size": '10px',
      "rules": [{
          "rule": "%v >= 0 && %v <= 20",
          "background-color": "red"
        },
        {
          "rule": "%v >= 20 && %v <= 40",
          "background-color": "orange"
        },
        {
          "rule": "%v >= 40 && %v <= 60",
          "background-color": "yellow"
        },
        {
          "rule": "%v >= 60 && %v <= 80",
          "background-color": "green"
        },
        {
          "rule": "%v >= 80 && %v <=100",
          "background-color": "blue"
        }
      ]
    }
  },
  "plot": {
    // "size": "100%",
    "background-color": "#000000"
  },
  "series": [{
    "values": [77]
    
  }]
  
  
       
        
      },
    };
  },
};
</script>

<style>

</style>