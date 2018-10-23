import v4 from 'uuid/v4';
import VuexModule from '@/vuex/module';


export interface IBlingBall {
  id     : string;
  colorR : number;
  colorG : number;
  colorB : number;
  r      : number;
  x      : number;
  y      : number;
}

export default new VuexModule<{blingBalls: IBlingBall[]}>('BlingBall', {
  state: {blingBalls: []},
  actions: {
    appendBall : (context) => context.commit('appendBall'),
    removeBall : (context, id: string) => context.commit('removeBall', id),
    removeAll  : (context) => context.commit('removeAll'),
    reposition : (context, id: string) => context.commit('reposition', id)
  },
  mutations: {
    appendBall(state) {
      for(let i = 0; i < 10; i++) state.blingBalls = [...state.blingBalls, {
        id     : v4()                            , r : Math.floor(Math.random() * 30) + 10,
        colorR : Math.floor(Math.random() * 255) , x : Math.floor(Math.random() * (($(window).width() || 0) - 80)),
        colorG : Math.floor(Math.random() * 255) , y : Math.max(80, Math.floor(Math.random() * (($(window).height() || 0) - 80))),
        colorB : Math.floor(Math.random() * 255)
      }];
    },

    removeBall(state, id: string) {
      state.blingBalls.splice(state.blingBalls.findIndex(ball => ball.id === id), 1);
    },

    removeAll(state) {
      state.blingBalls = [];
    },

    reposition(state, id: string) {
      state.blingBalls.forEach(ball => {
        if (ball.id === id) {
          ball.x = Math.floor(Math.random() * (($(window).width() || 0) - (ball.r * 2)));
          ball.y = Math.max(80, Math.floor(Math.random() * (($(window).height() || 0) - (ball.r * 2))))
        }
      });
    }
  }
});