<style lang="scss">
  div.display-text {
    width: 100%;
    word-wrap: break-word;
  }
</style>

<template>
  <div class="bling2-dashboard">
    <h2 class="text-warning">{{$t('bling.title.link')}}</h2>

    <hr class="border-white mb-5">

    <div class="text-center">
      <h3>{{$t('bling.label.totalCount')}}: {{state.blingBalls.length}}</h3>

      <button type="button" class="btn btn-lg btn-primary" @click="store.dispatch('appendBall')">
        <i class="fa fa-plus"/>
      </button>

      <button type="button" class="btn btn-lg btn-danger ml-3" @click="store.dispatch('removeAll')">
        <i class="fa fa-minus"/>
      </button>
    </div>

    <div class="form-group">
      <label>{{$t('bling.label.2wayBinding')}}</label>

      <input type="text" :id="textID" class="form-control" :placeholder="$t('bling.label.2wayPlaceholder')" v-model="textValue" />
    </div>

    <div class="form-group display-text">{{textValue}}</div>

    <BlingBall v-for="opts in state.blingBalls" :key="opts.id" :options="opts" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import v4 from 'uuid/v4';
  import VuexStore from '@/vuex/store';

  import { IBlingBall } from '@/vuex/models/BlingBall';
  import BlingBall from './@components/BlingBall.vue';


  @Component({
    components: {
      BlingBall
    }
  })
  export default class Bling2Dashboard extends Vue {
    private store = VuexStore;
    private textID = v4();
    private textValue = '';

    get state(): ({blingBalls: IBlingBall[];}) {
      return (this.store.state as {BlingBall: {blingBalls: IBlingBall[];};}).BlingBall;
    }
  }
</script>