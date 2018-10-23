import { Module } from 'vuex';
import VuexStore from '@/vuex/store';


export default class VuexModule<S> {

  constructor(
    readonly path: string,
    private module: Module<S, {}>
  ) {}

  doRegister(): void {
    VuexStore.registerModule(this.path, this.module);
  }
}