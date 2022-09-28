export default {
    namespaced :true,
    state() {
      return {
        count: 2,
      }
    },
  
    mutations: {
      increment(state, payload) {
        state.count += payload.value;
      }
    },
    actions: {
      increment(context, payload) {
        context.commit("increment", payload);
      },
      actionA(context) {
        return new Promise((resolve) => {
          context.commit('increment', { value: 2 });
          resolve("tapash");
        })
      },
      actionB(context) {
        context.dispatch('actionA').then((res) => {
  
          console.log('call from B');
          console.log(res);
  
        })
      }
    }
  };