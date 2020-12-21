<template>
  <div class="card">
    <div class="card-body">
      <div class="my-1">
        <button class="btn btn-primary" @click="openModal">Edit</button>
        <button class="btn float-right" @click="closeComponent">X</button>
      </div>

      <div class="zing-wrapper">

        <line-chart :chart="chart"></line-chart>
      </div>

    
    
    </div>
  </div>
</template>

<script>

import LineChart from "../components/charts/LineChart";


export default {
  components: {
    LineChart,
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