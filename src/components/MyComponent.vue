<template>
  <div class="card">
    <div class="card-body">
      <div class="my-1">
        <button class="btn btn-primary" @click="openModal">Edit</button>
        <button class="btn float-right" @click="closeComponent">X</button>
      </div>
<!-- 
    <zing-chart-2 :chart="chart"></zing-chart-2> -->

    <zing-chart :chart="chart"></zing-chart>
    
    </div>
  </div>
</template>

<script>

import ZingChart from "../components/charts/ZingChart";
// import ZingChart2 from "../components/charts/ZingChart2.vue";


export default {
  components: {
    ZingChart,
    // ZingChart2
  },
  props: {
    chart: Object,
    openModalAction: Function,
    closeComponentAction: Function
  },
  data() {
    return {
      TheModalLink: {
        name: "TheModal",
        params: {
          chart: this.charts,
        },
      },
    };
  },
  methods: {
    openModal() {
      this.openModalAction(this.chart);
    },
    closeComponent() {
      this.closeComponentAction(this.chart);
    }
  },
};
</script>

<style scoped>
</style>