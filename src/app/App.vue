<style lang="scss">
  @import '../../node_modules/font-awesome/css/font-awesome.min.css';
  @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

  body {
    font-family: '微軟正黑體';
    overflow: hidden !important;
    -ms-user-select: none;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;

    div#app > div.router-view {
      height: calc(100vh - 68px);
      overflow-y: auto;
    }
  }
</style>

<template>
  <div id="app" class="bg-dark text-white">

    <!-- Slot Example -->
    <HeaderNavbar :router="router">
      <img slot="icon" src="@/assets/logo.png" height="30">
    </HeaderNavbar>

    <div class="router-view p-3">
      <router-view />

      <TrackingGraphics />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import AppRouter from './AppRouter';

  import HeaderNavbar from './@components/HeaderNavbar.vue';
  import TrackingGraphics from './@components/TrackingGraphics.vue';


  @Component({
    components: {
      HeaderNavbar,
      TrackingGraphics
    }
  })
  export default class App extends Vue {
    private router = AppRouter;
  }
</script>