<template>
  <div class="home">
    <the-navbar :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }">
      <a class="btn" @click="toggleSidebar">
        <b-icon icon="three-dots"></b-icon>
      </a>
    </the-navbar>
    <the-sidebar :isSidebarOpen="isSidebarOpen">
      <a
        @click="toggleSidebar"
        class="float-right mx-1 btn text-white"
      >
        X
      </a>
    </the-sidebar>
    <div
      class="full"
      :class="{ active: isSidebarOpen, noActive: !isSidebarOpen }"
    >
      <h1>Hello</h1>

      <p>All action happens here</p>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheSidebar,
  },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
.full {
  background-color: brown;
  height: 2000px;
  /* margin-left: 0px;;
  transition: all 0.3s; */
}

.noActive {
  margin-left: 0;
  transition: all 0.3s;
}

.active {
  margin-left: 320px;
  transition: all 0.3s;
}
</style>
