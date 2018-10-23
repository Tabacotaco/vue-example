<style lang="scss">
  div.mouse-tracking {
    a.text-active {
      color: #856404;
    }
  }
</style>

<template>
  <div class="mouse-tracking">
    <h2 class="text-warning">{{$t('tracking.title.link')}}</h2>

    <hr class="border-white mb-5">

    <div class="text-center dashboard">
      <h4 class="text-left">
        <label class="w-50 text-right">{{$t('tracking.label.totalCount')}}:</label> {{state.trackingCount}}
      </h4>

      <h4 class="text-left">
        <label class="w-50 text-right">{{$t('tracking.label.size')}}:</label> {{state.defaultSize}}
      </h4>

      <button type="button" class="btn btn-lg" @click="store.dispatch('switchTurnOn', !state.turnOn)" :class="{
        'btn-warning'   : state.turnOn,
        'btn-secondary' : !state.turnOn
      }">
        <i class="fa" :class="{
          'fa-toggle-off' : state.turnOn,
          'fa-toggle-on'  : !state.turnOn
        }" />
      </button>
    </div>

    <hr class="border-white mb-3">

    <div class="router-view px-3">
      <nav class="nav nav-pills nav-fill mb-3">
        <router-link v-for="route in routes" class="nav-link nav-item" :key="`${route.name}-link`" :to="route.path" :class="{
          'bg-warning'   : isActived(route.name),
          'text-active'  : isActived(route.name),
          'text-warning' : !isActived(route.name)
        }">
          <i v-if="route.meta" :class="[route.meta.iconCls]" /> {{$t(route.name)}}
        </router-link>
      </nav>

      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import VuexStore from '@/vuex/store';

  import AppRouter from '@/app/AppRouter';
  import MouseTrackingRouter from './MouseTrackingRouter';
  import { IMouseTracking } from '@/vuex/models/MouseTracking';


  @Component({})
  export default class MouseTracking extends Vue {
    private store = VuexStore;
    private routes = MouseTrackingRouter;

    get state(): IMouseTracking {
      return (this.store.state as {MouseTracking: IMouseTracking;}).MouseTracking;
    }

    isActived(routerName: string): boolean {
      return AppRouter.currentRoute.name === routerName;
    }
  }
</script>