<template>
  <div>
      <div>
          <b-button @click="maximize">Maximize</b-button>
          <b-button>Minimize</b-button>
          <b-button>Zoom In</b-button>
          <b-button>Zoom Out</b-button>
          <b-button>View All</b-button>
          <b-button>Reset</b-button>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: ["chart"],
    methods: {
        maximize() {
            alert(this.chart.id)
            // this.chart.id.fullscreen();
        }
    }
}
</script>

<style>

</style>