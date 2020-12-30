<template>
  <div class="home bg-light">
    <h2 class="m-5">Secondary</h2>
    <the-card margin="m-5">
      <zoom-chart v-if="charts[3]" :chart="charts[3]"></zoom-chart>
    </the-card>
  </div>
</template>

<script>
import ZoomChart from "../components/charts/ZoomChart.vue";
import TheCard from "../components/TheCard.vue";

import { dataset1, dataset2 } from "../components/mock/MockData.js";
import { v4 as uuidv4 } from "uuid";

export default {
  mounted() {
    this.newComponent({
      color: "red",
      chartType: "line",
      datasetName: "data2",
    });
    this.newComponent({
      color: "green",
      chartType: "bar",
      datasetName: "data2",
    });
    this.newComponent({
      color: "blue",
      chartType: "bar",
      datasetName: "data1",
    });
    this.newComponent({
      color: "green",
      chartType: "line",
      datasetName: "data1",
    });

  },

  components: {
    ZoomChart,
    TheCard,
  },
  data() {
    return {
      charts: [],
      dataset1,
      dataset2,
    };
  },
  methods: {
    newComponent(newChart) {
      let newChartObject = {};
      newChartObject.id = uuidv4();
      newChartObject.color = newChart.color;
      newChartObject.chartType = newChart.chartType;
      newChartObject.datasetName = newChart.datasetName;
      if (newChart.datasetName === "data1") {
        newChartObject.dataset = this.dataset1;
      } else if (newChart.datasetName === "data2") {
        newChartObject.dataset = this.dataset2;
      }

      this.charts.push(newChartObject);
    },
  },
};
</script>

<style>
</style>