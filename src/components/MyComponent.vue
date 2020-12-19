<template>
  <div class="card">
    <div class="card-body">
      <div class="my-1">
        <button class="btn btn-primary" @click="openModal">Edit</button>
        <button class="btn float-right" @click="closeComponent">X</button>
      </div>

      <div class="zing-wrapper">

        <zing-chart :chart="chart"></zing-chart>
      </div>

    
    
    </div>
  </div>
</template>

<script>

import ZingChart from "../components/charts/ZingChart";


export default {
  components: {
    ZingChart,
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