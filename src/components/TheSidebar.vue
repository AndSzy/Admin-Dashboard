<template>
  <div>
    <!-- <b-btn @click="openSidebar"> 
      <b-icon icon="three-dots"></b-icon>
       </b-btn> -->

    <b-sidebar text-variant="white" id="sidebar-1" no-header v-model="isSidebarOpen">
      <slot></slot>
      <div class="mx-1 my-5">
        <b-nav vertical>
          <b-nav-text @click="openChild">
            Active
            <b-icon icon="chevron-left" class="float-right"></b-icon>


            </b-nav-text>
          <b-nav vertical :class="{notVisible: !open}" id="child">
            <b-nav-text>aaaa</b-nav-text>
          <b-nav-text>aaaa Link</b-nav-text>
          </b-nav>
          <b-nav-text>Link</b-nav-text>
          <b-nav-text>Another Link</b-nav-text>
          <b-nav-text disabled>Disabled</b-nav-text>
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
      open: false,
    }
  },
  methods: {
    openChild() {
      this.open = !this.open
    }
  }
};
</script>

<style>
.b-sidebar-body {
  background-color: #343a40;
}

.navbar-text {
  background-color: #343a40;
  padding: .5rem 1rem;
  border-radius: .25rem;
  margin-bottom: .2rem;

}

.navbar-text:hover {
  background-color: #484D53;
  cursor: pointer;
}

.navbar-text:active {
  background-color: #343a40;
}

#child.notVisible {
  display: none;
}
</style>