<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo">
                <a href="#" @click="removeTodo(index)">{{todo}}</a>
              </li>
            </ul>
            <form @submit.prevent="sub">
              <div class="form-group mt-5">
                <input type="text" placeholder="add todo" class="form-control" v-model="todo" />
                <button class="btn btn-outline-primary">Add to do</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import * as firebase from "firebase/app";
import "firebase/firestore";

export default {
  components: {
    Logo
  },
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  mounted() {
    firebase
      .firestore()
      .collection("todos")
      .get()
      .then(res => {
        res.forEach(doc => {
          this.$store.commit("addTodo", doc.data().todo);
        });
      });
  },
  methods: {
    sub() {
      if (this.todo) {
        let todo = this.todo;
        // Add a second document with a generated ID.
        firebase
          .firestore()
          .collection("todos")
          .add({})
          .then(docRef => {
            firebase
              .firestore()
              .collection("todos")
              .doc(docRef.id)
              .set({
                todo: todo,
                id: docRef.id
              })
              .then(() => {
                this.$store.dispatch("addTodo", { todo: todo, id: docRef.id });
                this.todo = "";
              });
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      }
    },
    removeTodo(index) {
      this.$store.dispatch("removeTodo", index);
      //this.$store.commit("removeTodo", index);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
