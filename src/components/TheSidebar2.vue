<template>
  <div>
    <b-sidebar
      text-variant="white"
      id="sidebar-1"
      no-header
      v-model="isSidebarOpen"
      :no-close-on-route-change= "true"
    >
      <slot></slot>
      <div class="mx-1 my-5">
        <!-- Admin -->
        <h3 class="mx-3 pb-3 border-bottom border-light">
          <b-icon icon="pentagon"></b-icon>
          Admin
        </h3>
        <!-- Main Menu -->
        <b-nav vertical class="px-3">
          <b-nav-text @click="openChild('dashboard')">
            <b-icon icon="clipboard-data"></b-icon>

            Dashboard
            <b-icon icon="chevron-left" class="float-right" :class="{ pointDown: dashboardsMenuOpened }"></b-icon>
          </b-nav-text>

          <b-nav vertical :class="{ visible: dashboardsMenuOpened }" id="childDash">
            <router-link to="/dashboard/home">
              Home 
            </router-link>
            <router-link to="/dashboard/secondary">
              Secondary
            </router-link>
          </b-nav>

          <b-nav-text>
            <b-icon icon="pen"></b-icon>
            Create
          </b-nav-text>

          <b-nav-text @click="openChild('chart')">
            <b-icon icon="bar-chart-fill"></b-icon>
            Chart
            <b-icon icon="chevron-left" class="float-right" :class="{ pointDown: chartsMenuOpened }"></b-icon>
          </b-nav-text>

          <b-nav vertical :class="{ visible: chartsMenuOpened }" id="childChart">
            <b-nav-text>Data</b-nav-text>
            <b-nav-text>Color</b-nav-text>
          </b-nav>

          <b-nav-text>
            <b-icon icon="table"></b-icon>
            Table
          </b-nav-text>
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
      dashboardsMenuOpened: true,
      chartsMenuOpened: false,
    };
  },
  methods: {
    openChild(target) {
      if(target === 'dashboard') {
        this.dashboardsMenuOpened = !this.dashboardsMenuOpened;
      } else if (target === 'chart') {
        this.chartsMenuOpened = !this.chartsMenuOpened;
      }
      
    },
  },
};
</script>

<style>
.b-sidebar-body {
  background-color: #343a40;
}

.b-sidebar-body li,.b-sidebar-body a {
  background-color: #343a40;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 0.2rem;
}

.b-sidebar-body li:hover,.b-sidebar-body a:hover {
  background-color: #484d53;
  cursor: pointer;
}

.b-sidebar-body li:active,.b-sidebar-body a:active {
  background-color: #343a40;
}

.b-sidebar-body a {
  color: inherit !important;
  text-decoration: none !important;
}

.b-sidebar-body a.router-link-active {
  background-color: #007bff;
}

#childDash {
  height: 0;
  overflow: hidden;
}

#childDash.visible {
  height: inherit;
}

#childChart {
  height: 0;
  overflow: hidden;
}

#childChart.visible {
  height: inherit;
}

.pointDown {
    transform: rotate(-90deg);
}
</style>