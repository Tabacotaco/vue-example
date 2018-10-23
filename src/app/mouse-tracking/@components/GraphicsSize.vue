<template>
  <div class="tracking-logs">
    <div class="form-group">
      <label :for="sizeID">{{$t('tracking.label.basicSize')}}</label>

      <input type="number" :id="sizeID" class="form-control" v-model="size" />
    </div>

    <ul class="list-group list-group-flush text-dark text-center">
      <li v-for="(graphics, index) in state.graphics" :key="graphics.id" class="list-group-item" :class="{
        'list-group-item-info': index % 2 === 1
      }">
        {{index}} - Size: {{graphics.size}} px
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
  export default class GraphicsSize extends Vue {
    private store = VuexStore;
    private sizeID = v4();

    set size(value: string) {
      this.store.dispatch('setDefaultSize', parseFloat(value));
    }

    get size(): string {
      return 'number' === typeof this.state.defaultSize && !isNaN(this.state.defaultSize) ?
        this.state.defaultSize.toString() : '';
    }

    get state(): IMouseTracking {
      return (this.store.state as {MouseTracking: IMouseTracking;}).MouseTracking;
    }
  }
</script>