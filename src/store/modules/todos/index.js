export default{
    namespaced :true,
    state() {
      return {
        todos: [
          { id: 1, name: "tapash", des: "this is my first project", done: true },
          { id: 2, name: "tapas", des: "this is my second project", done: true },
          { id: 3, name: "tapa", des: "this is my third project", done: false },
          { id: 4, name: "tap", des: "this is my fourth project", done: false },
        ]
      }
    },
  
    getters: {
      getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id === id)
      },
      getDoneList(state) {
        return state.todos.filter((list) => list.done);
      },
      getTodoDone(state, getters) {
        return getters.getDoneList.length;
      },
    }
  }