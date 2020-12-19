<template>
  <div class="home">
    <the-navbar
      class="sticky-top"
      :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }"
    >
      <a class="btn" @click="toggleSidebar">
        <b-icon icon="three-dots"></b-icon>
      </a>
    </the-navbar>
    <the-sidebar :isSidebarOpen="isSidebarOpen">
      <a @click="toggleSidebar" class="float-right mx-1 btn text-white"> X </a>
    </the-sidebar>
    <div
      class="full"
      :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }"
    >
      
      <!-- <div class="btn btn-secondary" @click="createDashboard">DASHBOARD</div> -->

      <grid-layout
        :layout.sync="layout"
        :col-num="3"
        :row-height="150"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
        
      >
        <grid-item
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >

          <!-- <component :is="item.is" :chart="item.d"></component> -->

          <my-component 
          :chart="item.d"
          :openModalAction="openComponentModal"
          :closeComponentAction="closeMyComponent"
          ></my-component>

         
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import MyComponent from "../components/MyComponent.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import VueGridLayout from "vue-grid-layout";

import { dataset1, dataset2 } from "../components/fake/FakeData.js";

import { v4 as uuidv4 } from "uuid";

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheSidebar,
    MyComponent,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  mounted() {
    this.newComponent({
      color: "red",
      chartType: "Line",
      datasetName: "data2",
    });
    this.newComponent({
      color: "green",
      chartType: "Bar",
      datasetName: "data2",
    });
    this.newComponent({
      color: "blue",
      chartType: "Bar",
      datasetName: "data1",
    });
    this.newComponent({
      color: "green",
      chartType: "Line",
      datasetName: "data1",
    });

// Create dashboard on load
    this.createDashboard();

  },
  data() {
    return {
      isSidebarOpen: true,
      dataset1,
      dataset2,
      charts: [],
      // Add dynamic calculation of height
      layout: [],
    };
  },
  methods: {
    createDashboard() {
      this.layout = [];
      this.layout.push(
        {x: 0,
        y: 0,
        w: 1,
        h: 4,
        minH: 4,
        i: "0",
        is: "MyComponent",
        d: this.charts[0],
      },
      { x: 1, y: 0, w: 1, h: 4, i: "1", is: "MyComponent", d: this.charts[1] },
        { x: 2, y: 0, w: 1, h: 4, i: "2", is: "MyComponent", d: this.charts[2]  },
        { x: 0, y: 1, w: 1, h: 4, i: "3", is: "MyComponent", d: this.charts[3] },);
    },
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
      alert("closing - change layout array !!")
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
  transition: margin-left 0.3s;
}

.active {
  margin-left: 320px;
  transition: margin-left 0.3s;
}

.vue-grid-layout {
  
}

.vue-grid-item {
  overflow: hidden;
}
</style>
