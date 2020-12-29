<template>
  <div>
    <b-navbar toggleable="lg" variant="info" type="light">

      <slot></slot>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-icon icon="person-fill"></b-icon>
            </template>
            <b-dropdown-item to="/login">Login</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/settings">
            <b-icon icon="gear-fill"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>