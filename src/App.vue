<template>
  <div class="app">
    <MainNavbar class="mainNavbar"></MainNavbar>
    <div class="app-body">
      <MenuSidebar class="menuSidebar"></MenuSidebar>
      <router-view class="routerView" />
    </div>
  </div>
</template>
<script>
import MainNavbar from './components/MainNavbar.vue'
import MenuSidebar from './components/MenuSidebar.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MenuSidebar
  }
}
</script>
<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1536px !important;
}

.mainNavbar {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  position: fixed;
  top: 0;
  background: white;
  z-index: 1;
}

.app-body {
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 61px;
}

.menuSidebar {
  width: 260px;
  max-width: 260px;
  border-right: 1px solid #E5E5E5;
  background: #fff;
  min-height: 100vh;

}
</style>
