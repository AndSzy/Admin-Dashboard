<template>
   <div class="home bg-light">
       <h2 class="m-5">Secondary</h2>
    <the-card>
      <zoom-chart v-if="charts[0]" :chart="charts[0]"></zoom-chart>
    </the-card>
  </div>
</template>

<script>
import ZoomChart from '../components/charts/ZoomChart.vue';
import TheCard from '../components/TheCard.vue';

export default {
    components: {
        ZoomChart,
        TheCard
    },
    data() {
        return {
            charts: [],
        }
    }
}
</script>

<style>

</style>