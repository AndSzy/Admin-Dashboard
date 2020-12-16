<template>
  <div class="home">
    <the-navbar :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }">
      <a class="btn" @click="toggleSidebar">
        <b-icon icon="three-dots"></b-icon>
      </a>
    </the-navbar>
    <the-sidebar :isSidebarOpen="isSidebarOpen">
      <a
        @click="toggleSidebar"
        class="float-right mx-1 btn text-white"
      >
        X
      </a>
    </the-sidebar>
    <div
      class="full"
      :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }"
    >
      <h1>Hello</h1>
      <div class="row">
        <my-component
        class="col-12 col-sm-6 col-lg-4"
          v-for="chart in charts"
          :key="chart.id"
          :chart="chart"
          :openModalAction="openComponentModal"
          :closeComponentAction="closeMyComponent"
      ></my-component>
      </div>
    
    </div>
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent.vue';
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";

import { dataset1, dataset2 } from "../components/fake/FakeData.js";

import { v4 as uuidv4 } from 'uuid';

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheSidebar,
    MyComponent,
  },
   mounted() {
    this.newComponent({color: "red", chartType: "Line", datasetName: "data2"});
    this.newComponent({color: "green", chartType: "Bar", datasetName: "data2"});
    this.newComponent({color: "blue", chartType: "Bar", datasetName: "data1"});
    this.newComponent({color: "green", chartType: "Line", datasetName: "data1"});

    // console.log("mounted");
  },
  data() {
    return {
      isSidebarOpen: true,
      dataset1,
      dataset2,
      charts: [],
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    openComponentModal(editedChart) {
      this.$router.push({
        name: "TheModal",
        params: {
          chart: editedChart,
        },
      });
    },
    closeComponentModal() {
      this.$router.push("/");
    },
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
    updateCharts(currentChart) {
      this.charts.forEach((chart) => {
        if (chart.id === currentChart.id) {
          chart.chartType = currentChart.chartType;
          chart.color = currentChart.color;
          if (currentChart.datasetName === "data1") {
            chart.dataset = this.dataset1;
          } else if (currentChart.datasetName === "data2") {
            chart.dataset = this.dataset2;
          }
        }
      });
    },
    closeMyComponent(closingChart) {
      this.charts.forEach((chart) => {
        if (chart.id === closingChart.id) {
          const index = this.charts.indexOf(chart);
          this.charts.splice(index, 1);
        }
      });
    },
  },
};
</script>

<style>
.full {
  background-color: brown;
  height: 2000px;
  /* margin-left: 0px;;
  transition: all 0.3s; */
}

.noActive {
  margin-left: 0;
  transition: all 0.3s;
}

.active {
  margin-left: 320px;
  transition: all 0.3s;
}
</style>
