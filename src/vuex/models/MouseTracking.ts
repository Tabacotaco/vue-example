import v4 from 'uuid/v4';

import VuexStore from '@/vuex/store';
import VuexModule from '@/vuex/module';


class MovingEvent {
  private mobStopFn  = () => VuexStore.dispatch('removeAllClients');

  constructor(private fn: (e: any) => void) {}

  get isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  on(): void {
    this.off();

    if (this.isMobile) {
      window.addEventListener('touchend'   , this.mobStopFn);
      window.addEventListener('touchmove'  , this.fn);
    } else {
      window.addEventListener('mousemove'  , this.fn)
    }
  }

  off(): void {
    window.removeEventListener('touchend'   , this.mobStopFn);
    window.removeEventListener('touchmove'  , this.fn);
    window.removeEventListener('mousemove'  , this.fn);
  }

  doGenerateGraphics(
    state: IMouseTracking,
    count: number = 0,
    lastGraphics?: ITrackingGraphics
  ): ITrackingGraphics[] {
    const graphics: ITrackingGraphics = {
      id     : v4(),
      size   : Math.round((lastGraphics ? lastGraphics.size : state.defaultSize) * state.scale),
      client : state.mouseClients[
        Math.max(0, Math.min(state.mouseClients.length - 1, Math.round(state.mouseClients.length * (1 - Math.pow(state.scale, count)))))
      ]
    };
    return graphics.size < 5 || (lastGraphics && graphics.client === lastGraphics.client)? [] : [graphics].concat(
      this.doGenerateGraphics(state, count + 1, graphics)
    );
  }
}

interface IMouseClient {
  x: number;
  y: number;
}

export interface ITrackingGraphics {
  id: string;
  size: number;
  client: IMouseClient;
}

export interface IMouseTracking {
  turnOn        : boolean;
  trackingCount : number;
  defaultSize   : number;
  scale         : number;
  colorR        : number;
  colorG        : number;
  colorB        : number;
  mouseClients  : IMouseClient[];
  graphics      : ITrackingGraphics[];
}

const movingFn = new MovingEvent(e => {
  if (movingFn.isMobile) VuexStore.dispatch('addClient', {
    x: e.touches[0].clientX,
    y: e.touches[0].clientY
  }); else VuexStore.dispatch('addClient', {
    x: e.clientX,
    y: e.clientY
  });
});

export default new VuexModule<IMouseTracking>('MouseTracking', {
  state: {
    turnOn : false                           , trackingCount : 20,
    scale  : .9                              , defaultSize   : 40,
    colorR : Math.floor(Math.random() * 255) , mouseClients  : [],
    colorG : Math.floor(Math.random() * 255) , graphics      : [],
    colorB : Math.floor(Math.random() * 255)
  },
  actions: {
    switchTurnOn     : (context, turnOn: boolean) => context.commit('switchTurnOn', turnOn),
    setTrackingCount : (context, count: number) => context.commit('setTrackingCount', count),
    setDefaultSize   : (context, size: number) => context.commit('setDefaultSize', size),
    addClient        : (context, client: IMouseClient) => context.commit('addClient', client),
    removeAllClients : (context) => context.commit('removeAllClients')
  },
  mutations: {
    switchTurnOn(state, turnOn: boolean) {
      state.turnOn = turnOn === true;
      movingFn[state.turnOn ? 'on' : 'off']();

      if (state.turnOn) {
        state.colorR = Math.floor(Math.random() * 255);
        state.colorG = Math.floor(Math.random() * 255);
        state.colorB = Math.floor(Math.random() * 255);
      } else {
        state.mouseClients = [];
        state.graphics     = [];
      }
    },

    setTrackingCount(state, count: number) {
      if ('number' === typeof count && !isNaN(count)) {
        state.trackingCount = count;
        state.mouseClients  = state.mouseClients.slice(0, state.trackingCount);
      }
    },

    setDefaultSize(state, size: number) {
      if ('number' === typeof size && !isNaN(size)) {
        state.defaultSize = size;
        state.graphics    = movingFn.doGenerateGraphics(state);
      }
    },

    addClient(state, client: IMouseClient) {
      if (state.turnOn) {
        state.mouseClients.splice(0, 0, client);
  
        state.mouseClients = state.mouseClients.slice(0, state.trackingCount);
        state.graphics     = movingFn.doGenerateGraphics(state);
      } else {
        state.mouseClients = [];
        state.graphics     = [];
      }
    },

    removeAllClients(state) {
      state.mouseClients = [];
      state.graphics     = [];
    }
  }
});