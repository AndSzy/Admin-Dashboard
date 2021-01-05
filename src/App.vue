<template>
  <div id="app">
    <router-view name="navbar" class="sticky-top">
      <a class="hamburger-btn"
      @click="toggleSidebar"
      :class="{ active: isSidebarOpen, noActive: !isSidebarOpen, 'hamburger-active': isSidebarOpen }"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </a>
    </router-view>
    <router-view name="sidebar" :isSidebarOpen="isSidebarOpen"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true,
    };
  },
  methods: {
       toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  }
}
</script>

<style>
@import url("https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css");
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("./../node_modules/admin-lte/dist/css/adminlte.min.css");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700");
@import "./assets/css/style.css";

</style>
