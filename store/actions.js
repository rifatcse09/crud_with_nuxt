export default {
  // addTodo(state, payload) {
  //   state.$store.commit("addTodo", this.todo);
  //   state.todos.push(payload);
  // },
  // removeTodo(state, payload) {
  //   Vue.delete(state.todos, payload);
  // }

  async addTodo({ commit }, payload) {
    commit("addTodo", payload);
  },
  async removeTodo({ commit }, payload) {
    commit("removeTodo", payload);
  }
};
