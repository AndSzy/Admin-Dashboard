<template>
  <div>
    <!-- <b-btn @click="openSidebar"> 
      <b-icon icon="three-dots"></b-icon>
       </b-btn> -->

    <b-sidebar
      text-variant="white"
      id="sidebar-1"
      no-header
      v-model="isSidebarOpen"
    >
      <slot></slot>
      <div class="mx-1 my-5">
        <h3 class="mx-3 pb-3 border-bottom border-light">
          <b-icon icon="pentagon"></b-icon>
          Admin
        </h3>
        <b-nav vertical class="px-3">
          <b-nav-text @click="openChild('dashboard')">
            <b-icon icon="clipboard-data"></b-icon>
            Dashboard
            <b-icon icon="chevron-left" class="float-right"></b-icon>
          </b-nav-text>
          <b-nav vertical :class="{ visible: dashboardOpen }" id="childDash">
            <b-nav-text id="home">Home</b-nav-text>
            <b-nav-text id="secondary">Secondary</b-nav-text>
          </b-nav>
          <b-nav-text>
            <b-icon icon="pen"></b-icon>
            Create</b-nav-text
          >
          <b-nav-text @click="openChild('chart')">
            <b-icon icon="bar-chart-fill"></b-icon>

            Chart
            <b-icon icon="chevron-left" class="float-right"></b-icon>
          </b-nav-text>
          <b-nav vertical :class="{ visible: chartOpen }" id="childChart">
            <b-nav-text>Data</b-nav-text>
            <b-nav-text>Color</b-nav-text>
          </b-nav>
          <b-nav-text disabled>
            <b-icon icon="table"></b-icon>
            Table</b-nav-text
          >
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: ["isSidebarOpen"],
  data() {
    return {
      dashboardOpen: true,
      chartOpen: false,
    };
  },
  methods: {
    openChild(target) {
      if(target === 'dashboard') {
        this.dashboardOpen = !this.dashboardOpen;
      } else if (target === 'chart') {
        this.chartOpen = !this.chartOpen;
      }
      
    },
  },
};
</script>

<style>
.b-sidebar-body {
  background-color: #343a40;
}

.navbar-text {
  background-color: #343a40;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.2rem;
}

.navbar-text:hover {
  background-color: #484d53;
  cursor: pointer;
}

.navbar-text:active {
  background-color: #343a40;
}


#childDash {
  height: 0;
  overflow: hidden;
}

#childDash.visible {
  height: inherit;
  /* transition: all 5s; */
}

#childChart {
  height: 0;
  overflow: hidden;
}

#childChart.visible {
  height: inherit;
  /* transition: all 5s; */
}

#home {
  background-color: blue;
}


</style>