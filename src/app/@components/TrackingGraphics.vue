<style lang="scss">
  div.tracking-graphics {
    position: fixed;
    z-index: 100;
    border-radius: 4px;
    border: 2px solid white;
    transform: rotate(45deg);
  }
</style>

<template>
  <div>
    <div v-for="graphics in state.graphics.map(g => g).reverse()"
      class="tracking-graphics d-flex justify-content-center align-items-center"
      :key="graphics.id"
      :style="{
        width      : `${graphics.size}px`,
        height     : `${graphics.size}px`,
        top        : `${graphics.client.y}px`,
        left       : `${graphics.client.x}px`,
        background : `radial-gradient(circle,white, rgb(${state.colorR}, ${state.colorG}, ${state.colorB}))`
      }" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VuexStore from '@/vuex/store';

  import { IMouseTracking, ITrackingGraphics } from '@/vuex/models/MouseTracking';


  @Component({})
  export default class TrackingGraphics extends Vue {
    private store = VuexStore;

    get state(): IMouseTracking {
      return (this.store.state as {MouseTracking: IMouseTracking;}).MouseTracking;
    }
  }
</script>