<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="./../../assets/img/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">Admin</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->

          <li class="nav-item has-treeview">
            <router-link
              event=""
              to=""
              class="nav-link"
              @click.native="openChild('dashboard')"
            >
              <b-icon icon="clipboard-data" class="nav-icon"></b-icon>
              <p>
                My Dashboard
                <b-icon
                  icon="chevron-left"
                  class="float-right"
                  :class="{ pointDown: dashboardsMenuOpened }"
                ></b-icon>
              </p>
            </router-link>
          </li>

          <li
            class="nav-item has-treeview"
            :class="{ visible: dashboardsMenuOpened }"
            id="childDash"
          >
            <router-link class="nav-link" to="/adminlte/home">
              <p>Home</p>
            </router-link>
            <router-link class="nav-link" to="/adminlte/secondary">
              <p>Secondary</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link event="" to="" class="nav-link">
              <b-icon icon="pen" class="nav-icon"></b-icon>
              <p>Create</p>
            </router-link>
          </li>

          <li class="nav-item has-treeview">
            <router-link
              event=""
              to=""
              class="nav-link"
              @click.native="openChild('chart')"
            >
              <b-icon icon="bar-chart-fill" class="nav-icon"></b-icon>
              <p>
                Chart
                <b-icon
                  icon="chevron-left"
                  class="float-right"
                  :class="{ pointDown: chartsMenuOpened }"
                ></b-icon>
              </p>
            </router-link>
          </li>

          <li
            class="nav-item has-treeview"
            :class="{ visible: chartsMenuOpened }"
            id="childChart"
          >
            <router-link class="nav-link" event="" to="">
              <p>Data</p>
            </router-link>
            <router-link class="nav-link" event="" to="">
              <p>Color</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link event="" to="" class="nav-link">
              <b-icon icon="table" class="nav-icon"></b-icon>
              <p>Table</p>
            </router-link>
          </li>

          <!-- <li class="nav-item has-treeview" :class="{ visible: dashboardsMenuOpened }" id="childDash">
            <router-link class="nav-link" to="/dashboard/home">
              Home 
            </router-link>
            <router-link class="nav-link" to="/dashboard/secondary">
              Secondary
            </router-link>
          </li> -->

          <!-- <b-nav-text class="nav-link">
            <b-icon icon="pen" class="nav-icon"></b-icon>
            <p>Create</p>
          </b-nav-text> -->

          <!-- <b-nav-text @click="openChild('chart') " class="nav-link">
            <b-icon icon="bar-chart-fill" class="nav-icon"></b-icon>
            <p>
              Chart
            <b-icon icon="chevron-left" class="float-right" :class="{ pointDown: chartsMenuOpened }"></b-icon>
            </p>
          </b-nav-text>

          <b-nav vertical :class="{ visible: chartsMenuOpened }" id="childChart">
            <b-nav-text>Data</b-nav-text>
            <b-nav-text>Color</b-nav-text>
          </b-nav>

          <b-nav-text class="nav-link">
            <b-icon icon="table" class="nav-icon"></b-icon>
            <p>Table</p>
          </b-nav-text> -->

          <!-- 
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

          <router-link to="/adminlte">
              AdminLTE
            </router-link> -->
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "SidebarMenu",
  // props: ["isSidebarOpen"],
  data() {
    return {
      dashboardsMenuOpened: true,
      chartsMenuOpened: false,
    };
  },
  methods: {
    openChild(target) {
      if (target === "dashboard") {
        this.dashboardsMenuOpened = !this.dashboardsMenuOpened;
      } else if (target === "chart") {
        this.chartsMenuOpened = !this.chartsMenuOpened;
      }
    },
  },
};
</script>

<style>
/* .b-sidebar-body {
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
} */

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

name: "SidebarMenu",