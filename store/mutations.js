import Vue from "vue";

export default {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  removeTodo(state, payload) {
    Vue.delete(state.todos, payload);
  }
};
