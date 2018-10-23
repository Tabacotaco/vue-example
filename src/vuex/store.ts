import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import BlingBallModule from './models/BlingBall';
import MouseTrackingModule from './models/MouseTracking';


Vue.use(Vuex);

export default new Store({});

BlingBallModule.doRegister();
MouseTrackingModule.doRegister();