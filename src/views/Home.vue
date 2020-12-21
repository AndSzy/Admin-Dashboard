<template>
  <div class="home bg-light">
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

    <zoom-chart v-if="charts[0]" :chart="charts[0]"></zoom-chart>
    
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
          dragIgnoreFrom='img'
        >

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
import ZoomChart from '../components/charts/ZoomChart.vue';

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheSidebar,
    MyComponent,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    ZoomChart,
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
    // this.createDashboard();

    this.createLayoutFromChartsArray();

    console.log(this.charts[0]);

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
    createLayoutFromChartsArray() {
      this.layout.length = 0;
      this.charts.forEach((chart) => {
        // this.layout.push({
        //   x: 1, y: 0, w: 1, h: 4, i: chart.id, is: "MyComponent", d: chart
        // })
        this.pushChartToLayout(chart)
      })
    },
    pushChartToLayout(chart) {
      let layoutArrayLength = this.layout.length + 1;
      let horizontal 
      if (layoutArrayLength%3 == 0) {
        horizontal =  2
      } else if (layoutArrayLength%3 == 2) {
        horizontal =  1
      } else {
        horizontal = 0
      }

      // console.log("layoutArrayLength:");
      // console.log(layoutArrayLength);

      let obj = {
        x: horizontal, y: Math.floor((layoutArrayLength-1)/3), w: 1, h: 4, i: chart.id, is: "MyComponent", d: chart
      }

      this.layout.push(obj)

      // console.log("Horizontal");
      // console.log(obj.x);
      // console.log("Y");
      // console.log(obj.y);
    },
    // createDashboard() {
    //   this.layout = [];
    //   this.layout.push(
    //     {x: 0,
    //     y: 0,
    //     w: 1,
    //     h: 4,
    //     i: "0",
    //     is: "MyComponent",
    //     d: this.charts[0],
    //   },
    //   { x: 1, y: 0, w: 1, h: 4, i: "1", is: "MyComponent", d: this.charts[1] },
    //     { x: 2, y: 0, w: 1, h: 4, i: "2", is: "MyComponent", d: this.charts[2]  },
    //     { x: 0, y: 1, w: 1, h: 4, i: "3", is: "MyComponent", d: this.charts[3] },);
    // },
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

    this.layout.forEach((layoutItem) => {
        if (layoutItem.i === closingChart.id) {
          const index = this.layout.indexOf(layoutItem);
          this.layout.splice(index, 1);
        }
      });

    },
  },
};
</script>

<style>
.full {
  
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

/* .vue-grid-item {
  overflow: hidden;
} */

.vue-grid-item {
    /* height: fit-content!important; */
    /* transform: none!important; */
    /* position: relative!important; */
    /* margin-bottom:10px; */
  }
</style>
