<style lang="scss">
  div.bling-ball {
    cursor: pointer;
    position: fixed;
    border-radius: 50%;
    opacity: .6;
  }
</style>

<template>
  <div class="bling-ball" @click="store.dispatch('removeBall', options.id)" :style="{
    width      : `${options.r * 2}px`,
    height     : `${options.r * 2}px`,
    top        : `${options.y}px`,
    left       : `${options.x}px`,
    background : `radial-gradient(circle,white, rgb(${options.colorR}, ${options.colorG}, ${options.colorB}))`
  }" />
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import VuexStore from '@/vuex/store';

  import { IBlingBall } from '@/vuex/models/BlingBall';


  @Component({})
  export default class BlingBall extends Vue {
    private store = VuexStore;
    private timerID!: NodeJS.Timer;

    @Prop()
    private options!: IBlingBall;

    mounted(): void {
      clearInterval(this.timerID);

      this.timerID = setInterval(
        () => VuexStore.dispatch('reposition', this.options.id),
        Math.floor(Math.random() * 2000) + 50
      );
    }

    destroyed(): void {
      clearInterval(this.timerID);
    }
  }
</script>