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

</style>
