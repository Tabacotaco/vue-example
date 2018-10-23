<template>
  <div class="tracking-logs">
    <div class="form-group">
      <label :for="countID">{{$t('tracking.label.tcount')}}</label>

      <input type="number" :id="countID" class="form-control" v-model="count" />
    </div>

    <ul class="list-group list-group-flush text-dark text-center">
      <li v-for="(graphics, index) in state.graphics" :key="graphics.id" class="list-group-item" :class="{
        'list-group-item-info': index % 2 === 1
      }">
        {{index}} - X: {{graphics.client.x}} / Y: {{graphics.client.y}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import v4 from 'uuid/v4';
  import VuexStore from '@/vuex/store';
  import { IMouseTracking, ITrackingGraphics } from '@/vuex/models/MouseTracking';


  @Component({})
  export default class TrackingLogs extends Vue {
    private store = VuexStore;
    private countID = v4();

    set count(value: string) {
      this.store.dispatch('setTrackingCount', parseFloat(value));
    }

    get count(): string {
      return 'number' === typeof this.state.trackingCount && !isNaN(this.state.trackingCount) ?
        this.state.trackingCount.toString() : '';
    }

    get state(): IMouseTracking {
      return (this.store.state as {MouseTracking: IMouseTracking;}).MouseTracking;
    }
  }
</script>